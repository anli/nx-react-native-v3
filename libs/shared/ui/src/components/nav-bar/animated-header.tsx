import React, { FC } from 'react'
import { Animated, ViewProps } from 'react-native'
import { Text } from '..'
import { AnimatedView } from '../animated-view'
import { getHeaderHeightPlatformOffset } from './get-header-height-platform-offset'

interface AnimatedHeaderProps extends Omit<ViewProps, 'style'> {
  title: string
  scrollY: Animated.AnimatedValue
  height: number
  subtitle?: string
}

export const AnimatedHeader: FC<AnimatedHeaderProps> = ({
  title,
  subtitle,
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
      justifyContent="center"
      paddingHorizontal="loose"
      variant="elevated"
      style={[{ transform: [{ translateY }] }]}
      {...otherProps}>
      {Boolean(subtitle) && <Text variant="body">{subtitle}</Text>}
      <Text variant="largeTitleEmphasized">{title}</Text>
    </AnimatedView>
  )
}
