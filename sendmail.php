<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);
    $mail->SetFrom('in@kyrii-group.com.ua', 'Форма з сайту');
    $mail->addAddress('in@kyrii-group.com.ua');
    $mail->Subject = 'Форма зворотнього зв\'язку з сайту';
    $body = '<h3>Лист з форми зворотнього зв\'язку на сайті!</h3>';
    if (trim(!empty($_POST['name']))) {
        $body.='<p><strong>Ім\'я:</strong> '.$_POST['name'].'</strong>';
    }
    if (trim(!empty($_POST['phone']))) {
        $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</strong>';
    }
    if (trim(!empty($_POST['email']))) {
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</strong>';
    }
    if (trim(!empty($_POST['message']))) {
        $body.='<p><strong>Повідомлення:</strong> '.$_POST['message'].'</strong>';
    }
    $mail->Body = $body;
    if (!$mail->send()) {
    $message = "Something went wrong! Please, try again later!";
    } else {
    $message = "Thank you! Your message has been sent!";
    }
    $response = ['message' => $message];
    header('Content-type: application/json');
    echo json_encode($response);
?>
