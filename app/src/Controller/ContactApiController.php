<?php

declare(strict_types=1);

namespace App\Controller;

use App\DTO\ContactDTO;
use App\Services\ContactValidatorService;
use App\Services\MailerService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Exception\ValidatorException;
use function json_decode;

final class ContactApiController extends AbstractController
{

    /**
     * @var \App\Services\ContactValidatorService
     */
    private ContactValidatorService $contactValidatorService;

    /**
     * @var \App\Services\MailerService
     */
    private MailerService $mailerService;

    public function __construct(ContactValidatorService $contactValidatorService, MailerService $mailerService)
    {
        $this->contactValidatorService = $contactValidatorService;
        $this->mailerService = $mailerService;
    }

    /**
     * @Route("/api/contact", name="api_register_contact", methods={"POST"})
     *
     * @param \Symfony\Component\HttpFoundation\Request $request
     *
     * @return JsonResponse
     */
    public function registerContact(Request $request): JsonResponse {
        $data = json_decode($request->getContent(), true);

        $contactDTO = new ContactDTO(
            $data['name'] ?? '',
            $data['email'] ?? '',
            $data['phone'] ?? '',
            $data['message'] ?? '',
            $data['privacy'] ?? '',
            $data['captcha'] ?? '',
        );

        try {
            $this->contactValidatorService->validate($contactDTO);
        } catch (ValidatorException $exception) {
            return new JsonResponse(json_decode($exception->getMessage(), true), JsonResponse::HTTP_BAD_REQUEST);
        }

        $this->mailerService->send($contactDTO);

        return new JsonResponse();
    }
}