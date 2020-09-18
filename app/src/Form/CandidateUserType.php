<?php


namespace App\Form;


use App\Entity\CandidateUser;
use App\Entity\PrivacyUser;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\RadioType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class CandidateUserType extends AbstractType
{

    public function __construct()
    {

    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('firstName',
                TextType::class,
                [

                    'attr' => ['placeholder' => 'nome'],
                    'constraints' => [
                        new NotBlank([
                            'message' => 'Il nome è obbligatorio',
                        ]),
                    ],
                    'required' => true
                ])
            ->add('lastName',
                TextType::class,
                [
                    'attr' => ['placeholder' => 'cognome'],
                    'constraints' => [
                        new NotBlank([
                            'message' => 'Il cognome è obbligatorio',
                        ]),
                    ],
                    'required' => true
                ])
            ->add('email',
                EmailType::class,
                [
                    'required' => true
                ])
            ->add('privacy',
                RadioType::class,
                [
                    'value' => true,
                    'required' => true
                ])
            ->add('submit',
                SubmitType::class,
                [
                    'label' => 'INVIA'
                ]);

    }


    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => CandidateUser::class,
            'csrf_protection' => false,
        ));
    }

}