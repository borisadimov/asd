<?php

declare(strict_types=1);

namespace App\Services;

use function filter_var;
use function sprintf;
use const FILTER_VALIDATE_BOOLEAN;

final class CaptchaService
{
    private const RECAPTCHA_URL = 'https://www.google.com/recaptcha/api/siteverify';
    private const RECAPTCHA_SECRET_KEY = '6Lf-hOQUAAAAAI9LE3MfZLN4jEFN_ax_xO-8L5Mq';

    /**
     * @var \App\Services\CurlService
     */
    private CurlService $curlService;

    public function __construct(CurlService $curlService)
    {
        $this->curlService = $curlService;
    }

    public function verify(string $captchaClientResponse): bool
    {
        $url = sprintf('%s?secret=%s&response=%s', self::RECAPTCHA_URL, self::RECAPTCHA_SECRET_KEY, $captchaClientResponse);
        $result = \json_decode($this->curlService->requestUrl($url), true);

        return isset($result['success']) && true === filter_var($result['success'], FILTER_VALIDATE_BOOLEAN);
    }
}