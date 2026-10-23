# LicenceFeeTable SDK exists test

import pytest
from licencefeetable_sdk import LicenceFeeTableSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = LicenceFeeTableSDK.test(None, None)
        assert testsdk is not None
