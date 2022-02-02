import React, { FC, useEffect, useRef, useState } from 'react'
import { Animated, Platform, ViewProps } from 'react-native'
import {
  SafeAreaProvider,
  useSafeAreaInsets
} from 'react-native-safe-area-context'
import { Text, View } from '..'
import { AnimatedView } from '../animated-view'
import { NavBarContext } from './use-nav-bar'

const NAV_TITLE_HEIGHT = 44
const NAV_BAR_Z_INDEX = 10
const HEADER_Z_INDEX = 9

const getHeaderHeightPlatformOffset = (height: number): number =>
  Platform.select({ ios: -height, default: 0 })

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
        value > getHeaderHeightPlatformOffset(headerHeight) + headerHeight * 0.6
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
}

const AnimatedNavBar: FC<AnimatedNavBarProps> = ({
  title,
  scrollY,
  headerHeight
}) => {
  const { top: paddingTop } = useSafeAreaInsets()
  const { opacity } = useAnimatedNavBar(scrollY, headerHeight)

  return (
    <View
      backgroundColor="surface"
      style={{ paddingTop }}
      zIndex={NAV_BAR_Z_INDEX}>
      <View
        alignItems="center"
        justifyContent="center"
        height={NAV_TITLE_HEIGHT}
        flexGrow={1}>
        <Animated.View style={{ opacity }}>
          <Text variant="bodyEmphasized">{title}</Text>
        </Animated.View>
      </View>
    </View>
  )
}

interface AnimatedHeaderProps extends Omit<ViewProps, 'style'> {
  title: string
  scrollY: Animated.AnimatedValue
  height: number
}

const AnimatedHeader: FC<AnimatedHeaderProps> = ({
  title,
  scrollY,
  children,
  height,
  ...otherProps
}) => {
  const translateY = scrollY.interpolate({
    inputRange: [
      getHeaderHeightPlatformOffset(height),
      getHeaderHeightPlatformOffset(height) + height
    ],
    outputRange: [0, -height],
    extrapolateLeft: 'clamp'
  })

  return (
    <AnimatedView
      top={0}
      width="100%"
      backgroundColor="surface"
      position="absolute"
      zIndex={HEADER_Z_INDEX}
      justifyContent="center"
      paddingHorizontal="loose"
      style={[{ transform: [{ translateY }] }]}
      {...otherProps}>
      <Text variant="largeTitleEmphasized">{title}</Text>
    </AnimatedView>
  )
}

interface NavBarScreenProps {
  headerHeight?: number
  title: string
}

// https://developer.apple.com/design/human-interface-guidelines/ios/bars/navigation-bars/
export const NavBarScreen: FC<NavBarScreenProps> = ({
  children,
  title,
  headerHeight = 41
}) => {
  const scrollY = useRef(new Animated.Value(-headerHeight)).current

  return (
    <SafeAreaProvider>
      <AnimatedNavBar
        title={title}
        scrollY={scrollY}
        headerHeight={headerHeight}
      />
      <View flex={1}>
        <AnimatedHeader scrollY={scrollY} title={title} height={headerHeight} />
        <NavBarContext.Provider
          value={{
            scrollY,
            headerHeight
          }}>
          {children}
        </NavBarContext.Provider>
      </View>
    </SafeAreaProvider>
  )
}
