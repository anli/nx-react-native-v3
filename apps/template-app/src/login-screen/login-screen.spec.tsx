import { mockNavigate, render } from '@nx-react-native/shared/utils-testing'
import { fireEvent } from '@testing-library/react-native'
import React from 'react'
import { LoginScreen } from './login-screen'

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
