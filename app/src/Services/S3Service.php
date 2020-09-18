<?php


namespace App\Services;


use League\Flysystem\FileNotFoundException;
use League\Flysystem\FilesystemInterface;
use Oneup\FlysystemBundle\DependencyInjection\Factory\Adapter\AwsS3V3Factory;
use Psr\Container\ContainerInterface;

class S3Service
{
    /**
     * @var \Symfony\Component\DependencyInjection\ContainerInterface
     */
    protected $containerService;

    /**
     * @var FilesystemInterface
     */
    protected $s3Filesystem;

    /**
     * @var string
     */
    protected $uploadTempDir;

    public function __construct(ContainerInterface $containerService)
    {
        $this->containerService = $containerService;
        $this->s3Filesystem = $this->containerService->get('s3_privacy_filesystem');

        $ini_val = ini_get('upload_tmp_dir');

        $this->uploadTempDir = $ini_val ? $ini_val : sys_get_temp_dir();
    }

    public function uploadToS3($assetPath, $filename, $mimeType)
    {

        $stream = fopen($assetPath, 'r+');
        $this->s3Filesystem->writeStream($filename, $stream, ['mimetype' => $mimeType]);
        fclose($stream);

        return $filename;
    }

    /**
     * @param $fileName
     * @return string
     */
    public function getObjectFromS3($fileName)
    {
        $pdfFilepath = '';
        try {
            if ($this->s3Filesystem->has($fileName)) {
                $stream = $this->s3Filesystem->readStream($fileName);


                $directory = $this->uploadTempDir . '/';

                $pdfFilepath = $directory . $fileName;

                // Write file to the desired path
                file_put_contents($pdfFilepath, $stream);
                fclose($stream);
            }
        } catch (FileNotFoundException $exception) {
            $pdfFilepath = '';
        }

        return $pdfFilepath;
    }
}