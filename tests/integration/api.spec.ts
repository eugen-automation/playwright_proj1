import {test} from '../../fixtures/fixtures'
import {expect} from '@playwright/test'


test('should get 202 response | @e2e', async ({ request }) => {

  const response = await request.get('https://demo.nopcommerce.com')
  console.log('response', response)
  expect(response.status()).toEqual(202)

});