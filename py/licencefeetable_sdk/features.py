# LicenceFeeTable SDK feature factory

from licencefeetable_sdk.feature.base_feature import LicenceFeeTableBaseFeature
from licencefeetable_sdk.feature.ratelimit_feature import LicenceFeeTableRatelimitFeature
from licencefeetable_sdk.feature.retry_feature import LicenceFeeTableRetryFeature
from licencefeetable_sdk.feature.test_feature import LicenceFeeTableTestFeature
from licencefeetable_sdk.feature.timeout_feature import LicenceFeeTableTimeoutFeature


_FEATURES = {
    "base": lambda: LicenceFeeTableBaseFeature(),
    "ratelimit": lambda: LicenceFeeTableRatelimitFeature(),
    "retry": lambda: LicenceFeeTableRetryFeature(),
    "test": lambda: LicenceFeeTableTestFeature(),
    "timeout": lambda: LicenceFeeTableTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
