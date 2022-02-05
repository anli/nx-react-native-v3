import { by, device, element, expect, waitFor } from 'detox'

describe('Habit List Screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
    await waitFor(element(by.id('HomeScreen')))
      .toBeVisible()
      .withTimeout(2000)

    await element(by.text('Button to Habit List Screen')).tap()
    await waitFor(element(by.id('HabitListScreen')))
      .toBeVisible()
      .withTimeout(2000)
  })

  it('Then I should see Title', async () => {
    await expect(element(by.text('Habits'))).toBeVisible()
  })
})
