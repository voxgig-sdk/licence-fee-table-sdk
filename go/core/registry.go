package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCalculatorEntityFunc func(client *LicenceFeeTableSDK, entopts map[string]any) LicenceFeeTableEntity

var NewEnquiryEntityFunc func(client *LicenceFeeTableSDK, entopts map[string]any) LicenceFeeTableEntity

var NewMcpEntityFunc func(client *LicenceFeeTableSDK, entopts map[string]any) LicenceFeeTableEntity

