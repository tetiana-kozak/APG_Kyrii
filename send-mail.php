<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    // Від кого лист
    $mail->SetFrom('forspam035@ukr.net', 'Letter from');
    // Кому лист
    $mail->addAddress('kozaktanya077@gmail.com');
    // Тема листа
    $mail->Subject = 'Online form';

    // Тіло листа

    $body = '<h1>You recieve a letter from online form in website!</h1>';

    if (trim(!empty($_POST['name']))) {
        $body.='<p><strong>Name:</strong> '.$_POST['name'].'</strong>';
    }

    if (trim(!empty($_POST['phone']))) {
        $body.='<p><strong>Phone:</strong> '.$_POST['phone'].'</strong>';
    }

    if (trim(!empty($_POST['email']))) {
        $body.='<p><strong>Email:</strong> '.$_POST['email'].'</strong>';
    }

    if (trim(!empty($_POST['message']))) {
        $body.='<p><strong>Message:</strong> '.$_POST['message'].'</strong>';
    }

    $mail->Body = $body;


   // Відправка форми

if (!$mail->send()) {
    $message = "Error!";
} else {
    $message = "Sent sucssesfully";
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>
