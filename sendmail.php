<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    header('Content-type: application/json');

    // Honeypot: якщо бот заповнив приховане поле — тихо ігноруємо
    if (!empty($_POST['website'])) {
        echo json_encode(['message' => 'Дякуємо! Ваше повідомлення надіслано!']);
        exit;
    }

    // Очищення вхідних даних
    $name    = htmlspecialchars(trim($_POST['name']    ?? ''), ENT_QUOTES, 'UTF-8');
    $phone   = htmlspecialchars(trim($_POST['phone']   ?? ''), ENT_QUOTES, 'UTF-8');
    $email   = htmlspecialchars(trim($_POST['email']   ?? ''), ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES, 'UTF-8');

    // Серверна валідація
    if (empty($name) || empty($phone) || empty($message) || !filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['message' => 'Невалідні дані. Перевірте заповнені поля.']);
        exit;
    }

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);
    $mail->SetFrom('in@kyrii-group.com.ua', 'Форма з сайту');
    $mail->addAddress('in@kyrii-group.com.ua');
    $mail->Subject = 'Форма зворотнього зв\'язку з сайту';
    $body = '<h3>Лист з форми зворотнього зв\'язку на сайті!</h3>';
    $body .= '<p><strong>Ім\'я:</strong> ' . $name . '</p>';
    $body .= '<p><strong>Телефон:</strong> ' . $phone . '</p>';
    $body .= '<p><strong>E-mail:</strong> ' . $email . '</p>';
    $body .= '<p><strong>Повідомлення:</strong> ' . $message . '</p>';
    $mail->Body = $body;

    if (!$mail->send()) {
        $message = "Something went wrong! Please, try again later!";
    } else {
        $message = "Дякуємо! Ваше повідомлення надіслано!";
    }
    echo json_encode(['message' => $message]);
?>
