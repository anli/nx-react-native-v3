import { Screen, View, Text, ThemeProvider } from '@nx-react-native/shared/ui'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const HomeScreen = (): React.ReactElement => {
  return (
    <Screen>
      <View>
        <Text>Welcome</Text>
      </View>
    </Screen>
  )
}

const Stack = createNativeStackNavigator()

export const App = (): React.ReactElement => (
  <ThemeProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </ThemeProvider>
)
