import { mockNavigate, render } from '@nx-react-native/shared/utils-testing'
import { fireEvent } from '@testing-library/react-native'
import React from 'react'
import { HomeScreen } from './home-screen'

describe('Home Screen', () => {
  it('Then I should see Home Screen', () => {
    const component = render(<HomeScreen.Component />)

    expect(component).toBeDefined()
  })

  it('When I press Login Button, Then I should see Login Screen', () => {
    const { getByText } = render(<HomeScreen.Component />)

    fireEvent.press(getByText('Button to Login Screen'))

    expect(mockNavigate).toBeCalledTimes(1)
    expect(mockNavigate).toBeCalledWith('Login')
  })
})
