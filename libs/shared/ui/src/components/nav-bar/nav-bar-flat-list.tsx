import React from 'react'
import { Animated, FlatListProps, Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavBar } from './use-nav-bar'

export const NavBarFlatList = <T,>({
  data,
  ...rest
}: FlatListProps<T>): JSX.Element => {
  const { scrollY, headerHeight } = useNavBar()
  const { bottom: paddingBottom } = useSafeAreaInsets()

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: true
    }
  )

  return (
    <Animated.FlatList<T>
      keyboardShouldPersistTaps="always"
      onScroll={handleScroll}
      contentInset={Platform.select({ ios: { top: headerHeight } })}
      contentOffset={Platform.select({
        ios: {
          x: 0,
          y: -headerHeight
        }
      })}
      contentContainerStyle={Platform.select({
        ios: {
          flexGrow: 1,
          paddingBottom
        },
        android: {
          flexGrow: 1,
          paddingTop: headerHeight
        }
      })}
      data={data as ReadonlyArray<Animated.WithAnimatedValue<T>>}
      {...rest}
    />
  )
}
