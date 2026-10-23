-- LicenceFeeTable SDK exists test

local sdk = require("licence-fee-table_sdk")

describe("LicenceFeeTableSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
