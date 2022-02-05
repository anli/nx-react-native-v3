import { render } from '@nx-react-native/shared/utils-testing'
import React from 'react'
import { HabitListScreen } from './habit-list-screen'

describe('Habit List Screen', () => {
  it('Given I am at Habit List Screen, Then I should see Habit List Screen', () => {
    const component = render(<HabitListScreen.Component />)

    expect(component).toBeDefined()
  })
})
