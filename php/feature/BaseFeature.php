<?php
declare(strict_types=1);

// LicenceFeeTable SDK base feature

class LicenceFeeTableBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(LicenceFeeTableContext $ctx, array $options): void {}
    public function PostConstruct(LicenceFeeTableContext $ctx): void {}
    public function PostConstructEntity(LicenceFeeTableContext $ctx): void {}
    public function SetData(LicenceFeeTableContext $ctx): void {}
    public function GetData(LicenceFeeTableContext $ctx): void {}
    public function GetMatch(LicenceFeeTableContext $ctx): void {}
    public function SetMatch(LicenceFeeTableContext $ctx): void {}
    public function PrePoint(LicenceFeeTableContext $ctx): void {}
    public function PreSpec(LicenceFeeTableContext $ctx): void {}
    public function PreRequest(LicenceFeeTableContext $ctx): void {}
    public function PreResponse(LicenceFeeTableContext $ctx): void {}
    public function PreResult(LicenceFeeTableContext $ctx): void {}
    public function PreDone(LicenceFeeTableContext $ctx): void {}
    public function PreUnexpected(LicenceFeeTableContext $ctx): void {}
}
