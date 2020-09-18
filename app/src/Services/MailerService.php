<?php

declare(strict_types=1);

namespace App\Services;

use App\DTO\ContactDTO;
use App\Entity\CandidateUser;
use App\Entity\PrivacyUser;
use League\Flysystem\MountManager;
use Symfony\Component\HttpKernel\KernelInterface;
use Twig\Environment;

final class MailerService
{
    /**
     * @var \Swift_Mailer
     */
    private \Swift_Mailer $mailer;

    /**
     * @var \Twig\Environment
     */
    private Environment $twig;

    /**
     * @var string
     */
    private string $mailerRecipient;

    /**
     * @var S3Service
     */
    protected $S3Service;

    /** string $rootPath */
    private $rootPath;

    public function __construct(\Swift_Mailer $mailer, Environment $twig, KernelInterface $kernel, S3Service $S3Service, string $mailerRecipient)
    {
        $this->mailer = $mailer;
        $this->twig = $twig;
        $this->mailerRecipient = $mailerRecipient;
        $this->S3Service = $S3Service;
        $this->rootPath = $kernel->getProjectDir();;
    }

    public function send(ContactDTO $contactDTO): void
    {
        $message = (new \Swift_Message('New contact from website'))
            ->setFrom('noreply@jungl.es')
            ->setTo($this->mailerRecipient)
            ->setBody(
                $this->twig->render(
                    'email/contact.html.twig',
                    [
                        'name' => $contactDTO->getName(),
                        'email' => $contactDTO->getEmail(),
                        'phone' => $contactDTO->getPhone(),
                        'message' => $contactDTO->getMessage(),
                        'privacy' => $contactDTO->getPrivacy(),
                    ]
                ),
                'text/html'
            );

        $this->mailer->send($message);
    }

    public function sendPrivacy(PrivacyUser $privacyUser)
    {
        $object = $this->S3Service->getObjectFromS3($privacyUser->getPdf());

        $message = (new \Swift_Message('Conferma Informativa Jungles eXperience'))
            ->setFrom('noreply@jungl.es')
            ->setTo($privacyUser->getEmail())
            ->setBody(
                $this->twig->render(
                    'email/privacy.html.twig',
                    [
                        'firstName' => $privacyUser->getFirstName(),
                        'lastName' => $privacyUser->getLastName(),
                    ]
                ),
                'text/html'
            );

        if (!empty($object)) {
            $message->attach(
                \Swift_Attachment::fromPath($object)->setFilename($privacyUser->getLastName() . '_' . $privacyUser->getFirstName() . '.pdf')
            );
        }

        $this->mailer->send($message);

    }

    public function sendCandidate(CandidateUser $candidateUser)
    {
        $object = $this->S3Service->getObjectFromS3($candidateUser->getPdf());

        $message = (new \Swift_Message('Jungles - Informativa “potenziali candidati/curricula”'))
            ->setFrom('noreply@jungl.es')
            ->setTo($candidateUser->getEmail())
            ->setBody(
                $this->twig->render(
                    'email/candidate.html.twig',
                    [
                        'firstName' => $candidateUser->getFirstName(),
                        'lastName' => $candidateUser->getLastName(),
                    ]
                ),
                'text/html'
            );

        if (!empty($object)) {
            $message->attach(
                \Swift_Attachment::fromPath($object)->setFilename($candidateUser->getLastName() . '_' . $candidateUser->getFirstName() . '.pdf')
            );
        }

        $this->mailer->send($message);

    }
}