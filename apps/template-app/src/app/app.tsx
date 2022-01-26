import {
  Screen,
  View,
  Text,
  ThemeProvider,
  Button,
  TextInput
} from '@nx-react-native/shared/ui'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

const HomeScreen = (): React.ReactElement => {
  return (
    <Screen>
      <View>
        <Text>Welcome</Text>

        <TextInput label="Label" mode="outlined" margin="base" />

        <Button
          margin="base"
          padding="base"
          mode="contained"
          borderRadius="extraLoose">
          Button
        </Button>
      </View>
    </Screen>
  )
}

const Stack = createNativeStackNavigator()

export const App = (): React.ReactElement => (
  <ThemeProvider>
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  </ThemeProvider>
)
