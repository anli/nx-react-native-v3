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
import { IconButton as PaperIconButton } from 'react-native-paper'
import { Theme } from '../..'

export type Props = SpacingProps<Theme> &
LayoutProps<Theme> &
BackgroundColorProps<Theme> &
PositionProps<Theme> &
React.ComponentProps<typeof PaperIconButton>

export const IconButton = createRestyleComponent<Props, Theme>(
  [spacing, layout, backgroundColor],
  PaperIconButton
)
