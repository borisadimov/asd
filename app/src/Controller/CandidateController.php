<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\CandidateUser;
use App\Form\CandidateUserType;
use App\Services\FormService;
use App\Services\MailerService;
use App\Services\PDFService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

final class CandidateController extends AbstractController
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
     * @Route("/informativa_candidati", name="candidate", methods={"GET","POST"})
     */
    public function cadidate(Request $request)
    {
        $candidateUser = new CandidateUser();

        $form = $this->createForm(CandidateUserType::class,$candidateUser);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $candidateUser = $form->getData();

            $file = $this->PDFService->generatePdfForCandidateUser($candidateUser,$form);

            $candidateUser->setPdf($file);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($candidateUser);
            $entityManager->flush();

            $this->mailerService->sendCandidate($candidateUser);

            return $this->render('page/candidateuser-thanks.html.twig',['user' => $candidateUser]);
        }

        return $this->render('page/candidateuser.html.twig',[
            'form' => $form->createView(),
            'print' => false
        ]);
    }
}