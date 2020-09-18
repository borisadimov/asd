<?php

namespace App\Repository;

use App\Entity\DynamicForm;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method DynamicForm|null find($id, $lockMode = null, $lockVersion = null)
 * @method DynamicForm|null findOneBy(array $criteria, array $orderBy = null)
 * @method DynamicForm[]    findAll()
 * @method DynamicForm[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DynamicFormRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DynamicForm::class);
    }
}
