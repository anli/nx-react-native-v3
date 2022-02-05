import React, { FC, useState } from 'react'
import { Animated, LayoutChangeEvent } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { View } from '..'
import { AnimatedHeader } from './animated-header'
import { AnimatedNavBar } from './animated-nav-bar'
import { NavBarContext } from './use-nav-bar'

export const NAV_BAR_HEADER_HEIGHTS = {
  default: 41,
  extended: 63
}
interface NavBarScreenProps {
  headerTitle: string
  headerSubtitle?: string
  navTitle: string
  headerButtonsComponent?: JSX.Element
}

// https://developer.apple.com/design/human-interface-guidelines/ios/bars/navigation-bars/
export const NavBarScreen: FC<NavBarScreenProps> = ({
  children,
  headerTitle,
  headerSubtitle,
  navTitle,
  headerButtonsComponent
}) => {
  const [headerHeight, setHeaderHeight] = useState<number>(0)
  const scrollY = new Animated.Value(-headerHeight)

  /* istanbul ignore next */
  return (
    <SafeAreaProvider>
      <AnimatedNavBar
        title={navTitle}
        scrollY={scrollY}
        headerHeight={headerHeight}
        buttonsComponent={headerButtonsComponent}
      />
      <View flex={1}>
        <AnimatedHeader
          onLayout={(event: LayoutChangeEvent) => {
            setHeaderHeight(event.nativeEvent.layout.height)
          }}
          scrollY={scrollY}
          title={headerTitle}
          height={headerHeight}
          subtitle={headerSubtitle}
        />
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
