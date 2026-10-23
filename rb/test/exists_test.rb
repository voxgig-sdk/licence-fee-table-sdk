# LicenceFeeTable SDK exists test

require "minitest/autorun"
require_relative "../LicenceFeeTable_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = LicenceFeeTableSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
