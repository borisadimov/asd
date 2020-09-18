<?php


namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="dynamic_form",
 *     indexes={@ORM\Index(name="dynamic_form_slug", columns={"slug"})})
 * @ORM\Entity(repositoryClass="App\Repository\DynamicFormRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class DynamicForm
{
    /**
     * @var RouterInterface $router
     */
    private $router;
    /**
     * @var int
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string|null
     * @ORM\Column(name="slug", type="string", length=255)
     */
    private $slug;

    /**
     * @var string|null
     * @ORM\Column(name="privacy_section_content", type="text")
     */
    private $privacySectionContent;

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
        return $this->getSlug();
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
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getSlug(): ?string
    {
        return $this->slug;
    }

    /**
     * @param string|null $slug
     * @return DynamicForm
     */
    public function setSlug(?string $slug): DynamicForm
    {
        $this->slug = strtolower($slug);
        return $this;
    }

    /**
     * @return string|null
     */
    public function getPrivacySectionContent(): ?string
    {
        return $this->privacySectionContent;
    }

    /**
     * @param string|null $privacySectionContent
     * @return DynamicForm
     */
    public function setPrivacySectionContent(?string $privacySectionContent): DynamicForm
    {
        $this->privacySectionContent = $privacySectionContent;
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
     * @return DynamicForm
     */
    public function setCreatedAt(?\DateTimeInterface $createdAt): DynamicForm
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    public function getDynamicUrl()
    {
        return $this->slug;
    }
}