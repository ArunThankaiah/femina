<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    $name = $data->name;
    $email = $data->email;
    $phone = $data->phone;
    $message = $data->message;

    $to = "arunchandhu120@gmail.com"; // Recipient email
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200); // Success
    } else {
        http_response_code(500); // Error
    }
} else {
    http_response_code(405); // Method not allowed
}
?>
