import { ThemeProvider } from '@nx-react-native/shared/ui'
import { NavigationContainer } from '@react-navigation/native'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

export const decorators = [
  withBackgrounds,
  (Story) => (
    <ThemeProvider>
      <PaperProvider>
        <NavigationContainer>
          <Story />
        </NavigationContainer>
      </PaperProvider>
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
