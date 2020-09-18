<?php


namespace App\Services;

use App\Entity\DynamicForm;
use App\Repository\DynamicFormRepository;

class FormService
{
    /**
     * @var DynamicFormRepository
     */
    protected $formRepository;

    public function __construct(DynamicFormRepository $formRepository)
    {
        $this->formRepository = $formRepository;
    }

    /**
     * @param string $slug
     * @return DynamicForm|null
     */
    public function getFormFromSlug(string $slug): ?DynamicForm{
        return $this->formRepository->findOneBy(['slug' => $slug]);
    }

}