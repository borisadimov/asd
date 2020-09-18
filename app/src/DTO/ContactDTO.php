<?php

/*
 * Alfredo Aiello <stuzzo@gmail.com>
 */

declare(strict_types=1);

namespace App\DTO;

use Symfony\Component\Validator\Constraints as Assert;

class ContactDTO
{
    /**
     * @var string
     *
     * @Assert\NotBlank
     */
    private string $name;

    /**
     * @var string
     *
     * @Assert\Email
     */
    private string $email;
    /**
     * @var string
     */
    private string $phone;

    /**
     * @var string
     *
     * @Assert\NotBlank
     */
    private string $message;

    /**
     * @var string
     *
     * @Assert\IdenticalTo(value="1")
     */
    private string $privacy;

    /**
     * @var string
     *
     * @Assert\NotBlank
     */
    private string $captcha;

    public function __construct(string $name, string $email, string $phone, string $message, string $privacy, string $captcha)
    {
        $this->name = $name;
        $this->email = $email;
        $this->phone = $phone;
        $this->message = $message;
        $this->privacy = $privacy;
        $this->captcha = $captcha;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @return string
     */
    public function getPhone(): string
    {
        return $this->phone;
    }

    /**
     * @return string
     */
    public function getMessage(): string
    {
        return $this->message;
    }

    /**
     * @return string
     */
    public function getPrivacy(): string
    {
        return $this->privacy;
    }

    /**
     * @return string
     */
    public function getCaptcha(): string
    {
        return $this->captcha;
    }

}