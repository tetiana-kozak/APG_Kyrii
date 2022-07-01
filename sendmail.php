<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'path/to/PHPMailer/src/Exception.php';
    require 'path/to/PHPMailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
<<<<<<< .merge_file_a18360
    $mail->isHTML(true); 
    $mail->setFrom('forspam035@ukr.net', 'Letter from');
=======
    $mail->IsHTML(true);
    $mail->SetFrom('kozaktanya077@gmail.com', 'Форма з сайту');
>>>>>>> .merge_file_a16188
    $mail->addAddress('kozaktanya077@gmail.com');
    $mail->Subject = 'Форма зворотнього зв\'язку з сайту';
    $body = '<h3>Лист з форми зворотнього зв\язку на сайті!</h3>';
    if (trim(!empty($_POST['name']))) {
<<<<<<< .merge_file_a18360
        $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
    }
    if (trim(!empty($_POST['phone']))) {
        $body.='<p><strong>Phone:</strong> '.$_POST['phone'].'</p>';
    }
    if (trim(!empty($_POST['email']))) {
        $body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
    }
    if (trim(!empty($_POST['messages']))) {
        $body.='<p><strong>Message:</strong> '.$_POST['messages'].'</p>';
    }
    $mail->Body = $body;
    if (!$mail->send()) {
        $message = 'Error!';
    } else {
        $message = 'Sent sucssesfully';
=======
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
>>>>>>> .merge_file_a16188
    }
    $response = ['message' => $message];
    header('Content-type: application/json');
    echo json_encode($response);
?>
