<?php
declare(strict_types=1);

// LicenceFeeTable SDK utility: result_headers

class LicenceFeeTableResultHeaders
{
    public static function call(LicenceFeeTableContext $ctx): ?LicenceFeeTableResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
