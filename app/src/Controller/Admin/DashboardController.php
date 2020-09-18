<?php


namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends EasyAdminController
{
    /**
     * @Route("/dashboard", name="admin_dashboard")
     */
    public function dashboardAction()
    {
        return $this->render('bundles/EasyAdminBundle/default/dashboard.html.twig', []);
    }
}