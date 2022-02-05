import { HeaderBackButton } from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native'
import React, { FC, useEffect, useRef, useState } from 'react'
import { Animated } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text, View } from '..'
import { getHeaderHeightPlatformOffset } from './get-header-height-platform-offset'

const NAV_BAR_Z_INDEX = 6
const NAV_TITLE_HEIGHT = 44
const NAV_BAR_SIDE_WIDTH = 100

const useAnimatedNavBar = (
  scrollY: Animated.AnimatedValue,
  headerHeight: number
): {
  opacity: Animated.Value
} => {
  const [showTitle, setShowTitle] = useState(false)
  const opacity = useRef(new Animated.Value(0)).current

  /* istanbul ignore next */
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: showTitle ? 1 : 0,
      duration: 300,
      useNativeDriver: true
    }).start()
  }, [opacity, showTitle])

  /* istanbul ignore next */
  useEffect(() => {
    const listener = scrollY?.addListener(({ value }) => {
      setShowTitle(
        value > getHeaderHeightPlatformOffset(headerHeight) + headerHeight
      )
    })

    return () => {
      scrollY?.removeListener(listener)
    }
  })

  return { opacity }
}

interface AnimatedNavBarProps {
  title: string
  scrollY: Animated.AnimatedValue
  headerHeight: number
  buttonsComponent?: JSX.Element
}

export const AnimatedNavBar: FC<AnimatedNavBarProps> = ({
  title,
  scrollY,
  headerHeight,
  buttonsComponent
}) => {
  const { top: paddingTop } = useSafeAreaInsets()
  const { opacity } = useAnimatedNavBar(scrollY, headerHeight)
  const navigation = useNavigation()
  const height = Number(NAV_TITLE_HEIGHT) + Number(paddingTop)

  /* istanbul ignore next */
  return (
    <View
      height={height}
      flexDirection="row"
      backgroundColor="surface"
      variant="elevated"
      style={[{ paddingTop }]}
      zIndex={NAV_BAR_Z_INDEX}>
      <View width={NAV_BAR_SIDE_WIDTH} justifyContent="center">
        {Boolean(navigation.canGoBack()) && (
          <HeaderBackButton onPress={navigation.goBack} />
        )}
      </View>
      <View alignItems="center" justifyContent="center" flexGrow={1}>
        <Animated.View style={{ opacity }}>
          <Text variant="bodyEmphasized">{title}</Text>
        </Animated.View>
      </View>
      <View
        width={NAV_BAR_SIDE_WIDTH}
        justifyContent="center"
        alignItems="flex-end">
        {buttonsComponent}
      </View>
    </View>
  )
}
