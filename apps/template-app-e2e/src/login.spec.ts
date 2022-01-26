import { by, device, element, expect, waitFor } from 'detox'

describe('Login Screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
    await waitFor(element(by.id('HomeScreen')))
      .toBeVisible()
      .withTimeout(2000)

    await element(by.text('Button to Login Screen')).tap()
    await waitFor(element(by.id('LoginScreen')))
      .toBeVisible()
      .withTimeout(2000)
  })

  it('Then I should see Button', async () => {
    await expect(element(by.text('Login'))).toBeVisible()
  })
})
