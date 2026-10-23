# LicenceFeeTable SDK utility: prepare_body
require_relative 'media'
module LicenceFeeTableUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return LicenceFeeTableUtilities.raw_body(ctx.reqdata) if LicenceFeeTableUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
