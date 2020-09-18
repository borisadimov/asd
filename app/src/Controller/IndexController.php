<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

final class IndexController extends AbstractController
{

    /**
     * @Route("/", name="index_site", methods={"GET"})
     */
    public function index()
    {
        return $this->render('page/index.html.twig');
    }

    /**
     * @Route("/privacy-policy", name="privacy_site", methods={"GET"})
     */
    public function privacy()
    {
        return $this->render('page/privacy.html.twig');
    }

    /**
     * @Route("/cookie-policy", name="cookie_site", methods={"GET"})
     */
    public function cookie()
    {
        return $this->render('page/cookie.html.twig');
    }

    /**
     * @Route("/welcomepagetestlab", name="welcomepage_lab", methods={"GET"})
     */
    public function welcomepagelab()
    {
        return $this->render('welcomepagelab/index.html.twig');
    }
}