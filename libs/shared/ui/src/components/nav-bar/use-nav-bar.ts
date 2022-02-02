import React, { useContext } from 'react'
import { Animated } from 'react-native'

export const NavBarContext = React.createContext<NavBarContextProps>({
  scrollY: new Animated.Value(0),
  headerHeight: 0
})

interface NavBarContextProps {
  scrollY: Animated.AnimatedValue
  headerHeight: number
}

export const useNavBar = (): NavBarContextProps => {
  return useContext(NavBarContext)
}
