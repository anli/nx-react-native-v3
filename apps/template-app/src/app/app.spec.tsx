import { render } from '@testing-library/react-native'
import React from 'react'
import App from './app'

test('renders correctly', () => {
  const { getByText } = render(<App />)
  expect(getByText('Welcome')).toBeDefined()
})
