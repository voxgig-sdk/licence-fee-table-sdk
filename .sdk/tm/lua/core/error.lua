-- LicenceFeeTable SDK error

local json = require("dkjson")

local LicenceFeeTableError = {}
LicenceFeeTableError.__index = LicenceFeeTableError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function LicenceFeeTableError.new(code, msg, ctx)
  local self = setmetatable({}, LicenceFeeTableError)
  self.is_sdk_error = true
  self.sdk = "LicenceFeeTable"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  self.status = -1
  CONTEXT[self] = ctx
  return self
end


function LicenceFeeTableError:context()
  return CONTEXT[self]
end


function LicenceFeeTableError:error()
  return self.msg
end


function LicenceFeeTableError:not_found()
  return 404 == self.status
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function LicenceFeeTableError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function LicenceFeeTableError:to_json()
  return json.encode(self:to_table())
end


function LicenceFeeTableError:__tostring()
  return self.msg
end


function LicenceFeeTableError.__tojson(self)
  return self:to_json()
end


return LicenceFeeTableError
