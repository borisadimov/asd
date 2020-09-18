<?php

/*
 * Alfredo Aiello <stuzzo@gmail.com>
 */

declare(strict_types=1);

namespace App\Services;

use App\DTO\ContactDTO;
use Symfony\Component\Validator\Exception\ValidatorException;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use function count;
use function json_encode;

final class ContactValidatorService
{
    /**
     * @var \Symfony\Component\Validator\Validator\ValidatorInterface
     */
    private ValidatorInterface $validator;

    /**
     * @var \App\Services\CaptchaService
     */
    private CaptchaService $captchaService;

    public function __construct(ValidatorInterface $validator, CaptchaService $captchaService)
    {
        $this->validator = $validator;
        $this->captchaService = $captchaService;
    }

    /**
     * @param \App\DTO\ContactDTO $contactDTO
     *
     * @throws \Symfony\Component\Validator\Exception\ValidatorException
     */
    public function validate(ContactDTO $contactDTO): void {
        $errors = $this->validator->validate($contactDTO);

        if (count($errors) > 0) {
            $returnErrors = [];
            /** @var \Symfony\Component\Validator\ConstraintViolation $error */
            foreach ($errors as $error) {
                $returnErrors[$error->getPropertyPath()] = $error->getMessage();
            }
            throw new ValidatorException(json_encode($returnErrors));
        }

        if (!$this->captchaService->verify($contactDTO->getCaptcha())) {
            $returnErrors = [];
            $returnErrors['captcha'] = 'Captcha validation failed';
            throw new ValidatorException(json_encode($returnErrors));
        }
    }
}