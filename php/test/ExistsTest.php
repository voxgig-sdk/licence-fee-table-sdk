<?php
declare(strict_types=1);

// LicenceFeeTable SDK exists test

require_once __DIR__ . '/../licencefeetable_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = LicenceFeeTableSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
