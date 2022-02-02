import { ThemeProvider } from '@nx-react-native/shared/ui'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { HomeScreen } from '../home-screen'
import { ListScreen } from '../list-screen'
import { LoginScreen } from '../login-screen'

// TODO: HEADER

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackParamList = {
  Home: undefined
  Login: undefined
  List: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const App = (): React.ReactElement => (
  <ThemeProvider>
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen.Component}
            options={HomeScreen.options}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen.Component}
            options={LoginScreen.options}
          />
          <Stack.Screen
            name="List"
            component={ListScreen.Component}
            options={ListScreen.options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  </ThemeProvider>
)
