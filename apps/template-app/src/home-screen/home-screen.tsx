import {
  Button,
  Screen,
  Text,
  TextInput,
  View
} from '@nx-react-native/shared/ui'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { RootStackParamList } from '../app'

const Component = (): React.ReactElement => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>()

  const handleLogin = (): void => {
    navigation.navigate('Login')
  }

  return (
    <Screen testID="HomeScreen">
      <View>
        <Text margin="base">Text</Text>

        <TextInput label="Text Input" mode="outlined" margin="base" />

        <Button
          margin="base"
          padding="base"
          mode="contained"
          borderRadius="extraLoose"
          onPress={handleLogin}>
          Button to Login Screen
        </Button>
      </View>
    </Screen>
  )
}

const options = {}

export const HomeScreen = {
  Component,
  options
}
