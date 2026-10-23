# LicenceFeeTable SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module LicenceFeeTableFeatures
  def self.make_feature(name)
    case name
    when "base"
      LicenceFeeTableBaseFeature.new
    when "ratelimit"
      LicenceFeeTableRatelimitFeature.new
    when "retry"
      LicenceFeeTableRetryFeature.new
    when "test"
      LicenceFeeTableTestFeature.new
    when "timeout"
      LicenceFeeTableTimeoutFeature.new
    else
      LicenceFeeTableBaseFeature.new
    end
  end
end
