<?php
header('Content-Type: text/plain');

// Replace with your recipient email
$adminEmail = "lokesh@imsolutions.mobi";

// Optional additional recipients
$additionalRecipients = ['ravi.k@imsolutions.mobi']; 

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Collect and sanitize POST data
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL) : '';
    $phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

    // Basic validation
    if (empty($name) || empty($email) || empty($phone)) {
        echo "Error: All fields are required";
        exit;
    }

    if (!$email) {
        echo "Error: Invalid email address";
        exit;
    }

    // Email subject and headers
    $subject = "Enquiry from EARA Group Website";
    $body = "
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Message:</strong> $message</p>
        <hr />
        <p>This message was sent via the contact form on your website.</p>
    ";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: noreply <noreply@earagroup.com>" . "\r\n";

    // Add additional recipients if any
    $to = $adminEmail;
    if (!empty($additionalRecipients)) {
        $to .= ',' . implode(',', $additionalRecipients);
    }

    // Send email
    if (mail($to, $subject, $body, $headers, "-fnoreply@earagroup.com")) {
        echo "Email sent successfully";
    } else {
        echo "Error sending email";
    }

} else {
    echo "Invalid request";
}
?>
