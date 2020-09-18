<?php


namespace App\Services;


use App\Entity\CandidateUser;
use App\Entity\PrivacyUser;
use Dompdf\Dompdf;
use Dompdf\Options;
use Oneup\FlysystemBundle\DependencyInjection\Factory\Adapter\AwsS3V3Factory;
use Psr\Container\ContainerInterface;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpKernel\KernelInterface;
use Twig\Environment;

class PDFService
{
    /**
     * @var \Symfony\Component\DependencyInjection\ContainerInterface
     */
    protected $S3Service;

    /**
     * @var string
     */
    protected $uploadTempDir;

    /**
     * @var Options $options
     */
    private Options $options;

    /**
     * @var \Twig\Environment
     */
    private Environment $twig;

    public function __construct(KernelInterface $kernel, Environment $twig, S3Service $S3Service)
    {
        $this->S3Service = $S3Service;

        $ini_val = ini_get('upload_tmp_dir');

        $this->uploadTempDir = $ini_val ? $ini_val : sys_get_temp_dir();
        $this->twig = $twig;
        $this->options = new Options();
    }

    public function generatePdfForPrivacyUser(PrivacyUser $privacyUser, FormInterface $form)
    {
        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($this->options);

        $html = $this->twig->render('page/privacyuser-pdf.html.twig', [
            'form' => $form->createView(),
            'dynamicForm' => $privacyUser->getForm(),
            'user' => $privacyUser
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper('A4', 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Store PDF Binary Data
        $output = $dompdf->output();

        $fileName = Uuid::uuid4()->toString() . '.pdf';
        // In this case, we want to write the file in the public directory
        $directory = $this->uploadTempDir . '/';
        // e.g /var/www/project/public/mypdf.pdf
        $pdfFilepath = $directory . $fileName;

        // Write file to the desired path
        file_put_contents($pdfFilepath, $output);

        return $this->S3Service->uploadToS3($pdfFilepath, $fileName, 'application/pdf');
    }

    public function generatePdfForCandidateUser(CandidateUser $candidateUser, FormInterface $form)
    {
        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($this->options);

        $html = $this->twig->render('page/candidateuser-pdf.html.twig', [
            'form' => $form->createView(),
            'dynamicForm' => $candidateUser->getForm(),
            'user' => $candidateUser
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper('A4', 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Store PDF Binary Data
        $output = $dompdf->output();

        $fileName = Uuid::uuid4()->toString() . '.pdf';
        // In this case, we want to write the file in the public directory
        $directory = $this->uploadTempDir . '/';
        // e.g /var/www/project/public/mypdf.pdf
        $pdfFilepath = $directory . $fileName;

        // Write file to the desired path
        file_put_contents($pdfFilepath, $output);

        return $this->S3Service->uploadToS3($pdfFilepath, $fileName, 'application/pdf');
    }


}