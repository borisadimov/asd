<?php


namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PrivacyUserRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class PrivacyUser
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
     * @return PrivacyUser
     */
    public function setFirstName(?string $firstName): PrivacyUser
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
     * @return PrivacyUser
     */
    public function setLastName(?string $lastName): PrivacyUser
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
     * @return PrivacyUser
     */
    public function setEmail(?string $email): PrivacyUser
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
     * @param bool|null $privacy
     * @return PrivacyUser
     */
    public function setPrivacy(?bool $privacy): PrivacyUser
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
     * @return PrivacyUser
     */
    public function setPdf(?string $pdf): PrivacyUser
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
     * @return PrivacyUser
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
     * @return PrivacyUser
     */
    public function setCreatedAt(?\DateTimeInterface $createdAt): PrivacyUser
    {
        $this->createdAt = $createdAt;
        return $this;
    }
}