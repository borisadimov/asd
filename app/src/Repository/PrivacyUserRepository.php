<?php

namespace App\Repository;

use App\Entity\PrivacyUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PrivacyUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method PrivacyUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method PrivacyUser[]    findAll()
 * @method PrivacyUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PrivacyUserRepository extends ServiceEntityRepository
{

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PrivacyUser::class);
    }
}
