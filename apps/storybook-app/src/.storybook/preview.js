import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { ThemeProvider } from '@nx-react-native/shared/ui'
import React from 'react'

export const decorators = [
  withBackgrounds,
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  backgrounds: [
    { name: 'plain', value: 'white', default: true },
    { name: 'warm', value: 'hotpink' },
    { name: 'cool', value: 'deepskyblue' }
  ]
}
