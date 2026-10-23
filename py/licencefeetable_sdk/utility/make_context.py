# LicenceFeeTable SDK utility: make_context

from licencefeetable_sdk.core.context import LicenceFeeTableContext


def make_context_util(ctxmap, basectx):
    return LicenceFeeTableContext(ctxmap, basectx)
