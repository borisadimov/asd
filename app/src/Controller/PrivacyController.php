<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\PrivacyUser;
use App\Form\PrivacyUserType;
use App\Services\FormService;
use App\Services\MailerService;
use App\Services\PDFService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

final class PrivacyController extends AbstractController
{
    /** @var PDFService $PDFService */
    protected $PDFService;

    /** @var MailerService $mailerService */
    protected $mailerService;

    /** @var FormService $formService */
    protected $formService;

    public function __construct(PDFService $PDFService, MailerService $mailerService, FormService $formService)
    {
        $this->PDFService = $PDFService;
        $this->mailerService = $mailerService;
        $this->formService = $formService;
    }

    /**
     * @Route("/informativa_privacy/usertestexperience/{slug}", name="privacy", methods={"GET","POST"}, defaults={"slug": "default"})
     */
    public function privacy(Request $request,string $slug)
    {
        $dynamicForm = $this->formService->getFormFromSlug(strtolower($slug));
        if (null === $dynamicForm){
            return $this->redirectToRoute('index_site');
        }

        $privacyUser = new PrivacyUser();
        $privacyUser->setForm($dynamicForm);

        $form = $this->createForm(PrivacyUserType::class,$privacyUser);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $privacyUser = $form->getData();

            $file = $this->PDFService->generatePdfForPrivacyUser($privacyUser,$form);

            $privacyUser->setPdf($file);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($privacyUser);
            $entityManager->flush();

            $this->mailerService->sendPrivacy($privacyUser);

            return $this->render('page/privacyuser-thanks.html.twig',['user' => $privacyUser]);
        }

        return $this->render('page/privacyuser.html.twig',[
            'form' => $form->createView(),
            'dynamicForm' => $dynamicForm,
            'print' => false
        ]);
    }
}