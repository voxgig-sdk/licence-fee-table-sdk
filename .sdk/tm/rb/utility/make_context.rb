# LicenceFeeTable SDK utility: make_context
require_relative '../core/context'
module LicenceFeeTableUtilities
  MakeContext = ->(ctxmap, basectx) {
    LicenceFeeTableContext.new(ctxmap, basectx)
  }
end
