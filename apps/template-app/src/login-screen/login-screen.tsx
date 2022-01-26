import { Login, Screen } from '@nx-react-native/shared/ui'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { RootStackParamList } from '../app'

const Component = (): React.ReactElement => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>()

  const handleLogin = (): void => {
    navigation.navigate('Home')
  }

  return (
    <Screen testID="LoginScreen">
      <Login
        title="Lorem ipsum dolor sit amet"
        subtitle="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
        buttonTitle="Login"
        onPress={handleLogin}></Login>
    </Screen>
  )
}

const options = {
  headerShown: false
}

export const LoginScreen = {
  Component,
  options
}
