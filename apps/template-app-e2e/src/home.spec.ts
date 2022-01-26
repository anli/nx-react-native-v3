import { by, device, element, expect, waitFor } from 'detox'

describe('Home Screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
    await waitFor(element(by.id('HomeScreen')))
      .toBeVisible()
      .withTimeout(2000)
  })

  it('Then I should see Button', async () => {
    await expect(element(by.text('Button to Login Screen'))).toBeVisible()
  })
})
