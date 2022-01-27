import { fireEvent } from '@testing-library/react-native'
import React from 'react'
import { render } from '../utils-testing'
import { LoginScreen } from './login-screen'

const mockNavigate = jest.fn()
jest.mock('@react-navigation/native', () => {
  const module = jest.requireActual('@react-navigation/native')
  return {
    ...module,
    useNavigation: () => ({
      ...module.useNavigation(),
      navigate: mockNavigate
    })
  }
})

describe('Login Screen', () => {
  it('Then I should see Login Screen', () => {
    const component = render(<LoginScreen.Component />)

    expect(component).toBeDefined()
  })

  it('When I press Login Button, Then I should see Login Screen', () => {
    const { getByText } = render(<LoginScreen.Component />)

    fireEvent.press(getByText('Login'))

    expect(mockNavigate).toBeCalledTimes(1)
    expect(mockNavigate).toBeCalledWith('Home')
  })
})
