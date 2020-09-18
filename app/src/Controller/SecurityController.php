<?php


namespace App\Controller;

use App\Entity\User;
use App\Services\S3Service;
use League\Flysystem\MountManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /** @var UrlGeneratorInterface */
    protected $router;

    /**
     * @var MountManager
     */
    protected $mountManager;

    /** string S3Service */
    private $S3Service;

    private $passwordEncoder;

    public function __construct(UrlGeneratorInterface $router, MountManager $mountManager, UserPasswordEncoderInterface $passwordEncoder, S3Service $S3Service)
    {
        $this->router = $router;
        $this->mountManager = $mountManager;
        $this->S3Service = $S3Service;
        $this->passwordEncoder = $passwordEncoder;
    }

    /**
     * @Route("/login", name="security_login")
     */
    public function login(AuthenticationUtils $authenticationUtils, Request $request): Response
    {
        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('@EasyAdmin/page/login.html.twig', [
            // parameters usually defined in Symfony login forms
            'error' => $error,
            'last_username' => $lastUsername,

            // OPTIONAL parameters to customize the login form:

            // the string used to generate the CSRF token. If you don't define
            // this parameter, the login form won't include a CSRF token
            'csrf_token_intention' => 'authenticate',
            // the URL users are redirected to after the login (default: path('easyadmin'))
            'target_path' => $this->generateUrl('easyadmin'),
            // the label displayed for the username form field (the |trans filter is applied to it)
            'username_label' => 'Your username',
            // the label displayed for the password form field (the |trans filter is applied to it)
            'password_label' => 'Your password',
            // the label displayed for the Sign In form button (the |trans filter is applied to it)
            'sign_in_label' => 'Log in',
            // the 'name' HTML attribute of the <input> used for the username field (default: '_username')
            'username_parameter' => '_username',
            // the 'name' HTML attribute of the <input> used for the password field (default: '_password')
            'password_parameter' => '_password',
        ]);
    }

    /**
     * This is the route the user can use to logout.
     *
     * But, this will never be executed. Symfony will intercept this first
     * and handle the logout automatically. See logout in app/config/security.yml
     *
     * @Route("/logout", name="security_logout")
     */
    public function logout(): void
    {
        throw new \Exception('This should never be reached!');
    }

    /**
     * @Route("/private/privacy/{fileName}", name="security_download_privacy_pdf", methods={"GET","HEAD"})
     */
    public function invoiceUpload($fileName, Request $request, AuthorizationCheckerInterface $authChecker)
    {
        if (false === $authChecker->isGranted(User::ROLE_ADMIN) && false === $authChecker->isGranted(User::ROLE_ADMIN_CANDIDATE)) {
            return $this->redirectToRoute('security_login');
        }

        $filePath = $this->S3Service->getObjectFromS3($fileName);

        $file = new File($filePath);

        return $this->file($file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
}
