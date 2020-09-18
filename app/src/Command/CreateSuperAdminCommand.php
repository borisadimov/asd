<?php

namespace App\Command;


use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class CreateSuperAdminCommand extends Command
{

    protected static $defaultName = 'app:create-super-admin';
    /**
     * @var SymfonyStyle
     */
    private $io;

    /** @var EntityManagerInterface $entityManager */
    private $entityManager;

    /** @var UserPasswordEncoderInterface $passwordEncoder */
    private $passwordEncoder;

    public function __construct(EntityManagerInterface $em, UserPasswordEncoderInterface $passwordEncoder)
    {
        parent::__construct();

        $this->entityManager = $em;
        $this->passwordEncoder = $passwordEncoder;
    }

    /**
     * This optional method is the first one executed for a command after configure()
     * and is useful to initialize properties based on the input arguments and options.
     */
    protected function initialize(InputInterface $input, OutputInterface $output)
    {
        // SymfonyStyle is an optional feature that Symfony provides so you can
        // apply a consistent look to the commands of your application.
        // See https://symfony.com/doc/current/console/style.html
        $this->io = new SymfonyStyle($input, $output);
    }

    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setDescription('Creates default admins users')
            ->setHelp($this->getCommandHelp());
    }


    protected function execute(InputInterface $input, OutputInterface $output)
    {

        if (null == $this->entityManager->getRepository(User::class)->findOneBy(['username' => 'admin'])) {
            $user = new User();
            $user->setEmail('giuseppe.nucifora@purplenetwork.it');
            $user->setRoles([User::ROLE_ADMIN]);
            $user->setUsername('admin');

            $user->setPassword($this->passwordEncoder->encodePassword(
                $user,
                'LrfvYcKStzg3'
            ));

            $this->entityManager->persist($user);

            $this->entityManager->flush();
        }

        if (null == $this->entityManager->getRepository(User::class)->findOneBy(['username' => 'admin_candidate'])) {
            $user = new User();
            $user->setEmail('giuseppe.nucifora1@purplenetwork.it');
            $user->setRoles([User::ROLE_ADMIN_CANDIDATE]);
            $user->setUsername('admin_candidate');

            $user->setPassword($this->passwordEncoder->encodePassword(
                $user,
                'm~3oF4>@emy4?#'
            ));

            $this->entityManager->persist($user);

            $this->entityManager->flush();
        }

        $this->io->success(sprintf("Admin created"));

        return 0;
    }

    /**
     * The command help is usually included in the configure() method, but when
     * it's too long, it's better to define a separate method to maintain the
     * code readability.
     */
    private function getCommandHelp()
    {
        return <<<'HELP'
The <info>%command.name%</info> Creates default admins users :

  <info>php %command.full_name%</info> 

HELP;
    }
}