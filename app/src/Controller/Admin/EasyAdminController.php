<?php

namespace App\Controller\Admin;

use App\Entity\User;

use Doctrine\ORM\EntityManager;
use AlterPHP\EasyAdminExtensionBundle\Controller\EasyAdminController as BaseAdminController;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;

class EasyAdminController extends BaseAdminController
{
    /** @var array The full configuration of the entire backend */
    protected $config;

    /** @var array The full configuration of the current entity */
    protected $entity;

    /** @var Request The instance of the current Symfony request */
    protected $request;

    /** @var EntityManager The Doctrine entity manager for the current entity */
    protected $em;

    /** @var Security $security */
    protected $security;

    /** @var User */
    protected $user;

    public function __construct( Security $security, EntityManagerInterface $entityManager)
    {

        $this->security = $security;
        $this->user = $this->security->getUser();
        $this->em = $entityManager;
    }
}
