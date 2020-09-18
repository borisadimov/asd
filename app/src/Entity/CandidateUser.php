<?php


namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CandidateUserRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class CandidateUser
{
    /**
     * @var int
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string|null
     * @ORM\Column(type="string", length=255)
     */
    private $firstName;

    /**
     * @var string|null
     * @ORM\Column(type="string", length=255)
     */
    private $lastName;

    /**
     * @var string|null
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @var bool|null
     * @ORM\Column(type="boolean")
     */
    private $privacy;

    /**
     * @var string|null
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $pdf;

    /**
     * @var
     * @ORM\ManyToOne(targetEntity="App\Entity\DynamicForm", cascade={"persist"}, fetch="EAGER")
     * @ORM\JoinColumn(name="form", referencedColumnName="id")
     */
    private $form;

    /**
     * @var \DateTimeInterface|null
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    public function __construct()
    {

    }

    public function __toString()
    {
        return $this->firstName;
    }

    /**
     * @ORM\PrePersist()
     */
    public function prePersist()
    {
        if (!$this->getCreatedAt()) {
            $this->createdAt = new \DateTime();
        }
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    /**
     * @param string|null $firstName
     * @return CandidateUser
     */
    public function setFirstName(?string $firstName): CandidateUser
    {
        $this->firstName = $firstName;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    /**
     * @param string|null $lastName
     * @return CandidateUser
     */
    public function setLastName(?string $lastName): CandidateUser
    {
        $this->lastName = $lastName;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    /**
     * @param string|null $email
     * @return CandidateUser
     */
    public function setEmail(?string $email): CandidateUser
    {
        $this->email = $email;
        return $this;
    }

    /**
     * @return bool|null
     */
    public function getPrivacy(): ?bool
    {
        return $this->privacy;
    }

    /**
     * @param bool|null $Candidate
     * @return CandidateUser
     */
    public function setPrivacy(?bool $privacy): CandidateUser
    {
        $this->privacy = $privacy;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getPdf(): ?string
    {
        return $this->pdf;
    }

    /**
     * @param string|null $pdf
     * @return CandidateUser
     */
    public function setPdf(?string $pdf): CandidateUser
    {
        $this->pdf = $pdf;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getForm()
    {
        return $this->form;
    }

    /**
     * @param mixed $form
     * @return CandidateUser
     */
    public function setForm($form)
    {
        $this->form = $form;
        return $this;
    }

    /**
     * @return \DateTimeInterface|null
     */
    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    /**
     * @param \DateTimeInterface|null $createdAt
     * @return CandidateUser
     */
    public function setCreatedAt(?\DateTimeInterface $createdAt): CandidateUser
    {
        $this->createdAt = $createdAt;
        return $this;
    }
}