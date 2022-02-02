import {
  backgroundColor,
  BackgroundColorProps,
  createRestyleComponent,
  layout,
  LayoutProps,
  PositionProps,
  spacing,
  SpacingProps
} from '@shopify/restyle'
import React from 'react'
import { Animated } from 'react-native'
import { Theme } from '../..'

export type ScreenProps = SpacingProps<Theme> &
LayoutProps<Theme> &
BackgroundColorProps<Theme> &
PositionProps<Theme> &
React.ComponentProps<typeof Animated.View> & {
  children?: React.ReactNode
}

export const AnimatedView = createRestyleComponent<ScreenProps, Theme>(
  [spacing, layout, backgroundColor],
  Animated.View
)
