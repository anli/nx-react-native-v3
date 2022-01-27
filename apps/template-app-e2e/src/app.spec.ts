import { by, device, element, expect } from 'detox'

describe('Template App', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('Then I should see Home Screen', async () => {
    await expect(element(by.text('Home'))).toBeVisible()
  })
})
