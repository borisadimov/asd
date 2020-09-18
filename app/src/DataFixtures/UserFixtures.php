<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\PrivacyUser;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{

    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(\Doctrine\Persistence\ObjectManager $manager): void
    {
        $user = new User();
        $user->setEmail('giuseppe.nucifora@purplenetwork.it');
        $user->setRoles([User::ROLE_ADMIN]);
        $user->setUsername('admin');

        $user->setPassword($this->passwordEncoder->encodePassword(
            $user,
            'LrfvYcKStzg3'
        ));

        $manager->persist($user);

        $manager->flush();

        $user = new User();
        $user->setEmail('giuseppe.nucifora1@purplenetwork.it');
        $user->setRoles([User::ROLE_ADMIN_CANDIDATE]);
        $user->setUsername('admin_candidate');

        $user->setPassword($this->passwordEncoder->encodePassword(
            $user,
            'm~3oF4>@emy4?#'
        ));

        $manager->persist($user);

        $manager->flush();
    }
}
