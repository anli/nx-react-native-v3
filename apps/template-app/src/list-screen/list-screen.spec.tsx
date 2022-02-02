import { render } from '@nx-react-native/shared/utils-testing'
import React from 'react'
import { ListScreen } from './list-screen'

describe('List Screen', () => {
  it('Given I am at List Screen, Then I should see List Screen', () => {
    const component = render(<ListScreen.Component />)

    expect(component).toBeDefined()
  })
})
