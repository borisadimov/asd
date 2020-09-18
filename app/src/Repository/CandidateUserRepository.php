<?php

namespace App\Repository;

use App\Entity\CandidateUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method CandidateUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method CandidateUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method CandidateUser[]    findAll()
 * @method CandidateUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CandidateUserRepository extends ServiceEntityRepository
{

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CandidateUser::class);
    }
}
