<?php
    session_start();
    $now = time();
    $limit = 60;

    if (isset($_SESSION['last_form_submit']) && ($now - $_SESSION['last_form_submit']) < $limit) {
        header('Content-type: application/json');
        echo json_encode(['message' => 'Too many requests. Please wait a moment and try again.']);
        exit;
    }
    $_SESSION['last_form_submit'] = $now;

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $name    = htmlspecialchars(trim($_POST['name'] ?? ''));
    $phone   = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $email   = htmlspecialchars(trim($_POST['email'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);
    $mail->SetFrom('forspam035@ukr.net', 'Форма з сайту');
    $mail->addAddress('forspam035@ukr.net');
    $mail->Subject = 'Форма зворотнього зв\'язку з сайту';
    $body = '<h3>Лист з форми зворотнього зв\'язку на сайті!</h3>';
    if ($name) {
        $body .= '<p><strong>Ім\'я:</strong> ' . $name . '</p>';
    }
    if ($phone) {
        $body .= '<p><strong>Телефон:</strong> ' . $phone . '</p>';
    }
    if ($email) {
        $body .= '<p><strong>E-mail:</strong> ' . $email . '</p>';
    }
    if ($message) {
        $body .= '<p><strong>Повідомлення:</strong> ' . $message . '</p>';
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
