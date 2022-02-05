import { by, device, element, expect, waitFor } from 'detox'

describe('List Screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
    await waitFor(element(by.id('HomeScreen')))
      .toBeVisible()
      .withTimeout(2000)

    await element(by.text('Button to List Screen')).tap()
    await waitFor(element(by.id('ListScreen')))
      .toBeVisible()
      .withTimeout(2000)
  })

  it('Then I should see Title', async () => {
    await expect(element(by.text('List'))).toBeVisible()
  })
})
