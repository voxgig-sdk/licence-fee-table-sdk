<?php
declare(strict_types=1);

// LicenceFeeTable SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class LicenceFeeTableMakeContext
{
    public static function call(array $ctxmap, ?LicenceFeeTableContext $basectx): LicenceFeeTableContext
    {
        return new LicenceFeeTableContext($ctxmap, $basectx);
    }
}
