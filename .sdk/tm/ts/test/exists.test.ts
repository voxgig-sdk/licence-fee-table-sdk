
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { LicenceFeeTableSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = LicenceFeeTableSDK.test()
    equal(testsdk instanceof LicenceFeeTableSDK, true,
      'LicenceFeeTableSDK.test() must return a client synchronously')
  })

})
