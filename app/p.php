<?php
function aws_iam_smtp_password_generator($secret) {
    $message = "SendRawEmail";
    $versionInBytes = chr(2);
    $signatureInBytes = hash_hmac('sha256', $message, $secret, true);
    $signatureAndVer = $versionInBytes.$signatureInBytes;
    $smtpPassword = base64_encode($signatureAndVer);

    return $smtpPassword;
}

echo aws_iam_smtp_password_generator('G8XQdwH+MeGOVYTh9HMYPUSJEuR2btFoIwxJAUJ7');
echo PHP_EOL;
