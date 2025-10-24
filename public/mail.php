<?php
header('Content-Type: text/plain');

// --- Configuration ---
$adminEmail = "lokesh@imsolutions.mobi"; 
$additionalRecipients = ['ravi.k@imsolutions.mobi', 'lokesh@imsolutions.mobi']; 
// CRUCIAL: Must be a verified, existing email on your server's domain for reliability
$fromEmail = "noreply@earagroup.com"; 
// ---------------------

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Collect and sanitize POST data
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL) : '';
    $phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

    // Basic validation
    if (empty($name) || !$email || empty($phone)) {
        echo "Error: Name, valid email, and phone are required."; // Updated error message
        exit;
    }

    // Email subject and body
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

    // Common headers - Ensure the From header is clean
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    // Sender is set using the variable
    $headers .= "From: EARA Group Contact Form <" . $fromEmail . ">" . "\r\n"; 
    // This allows the recipient to hit 'Reply' and send a message back to the user
    $headers .= "Reply-To: " . $name . " <" . $email . ">" . "\r\n"; 

    // Prepare all unique recipients
    $recipients = array_unique(array_filter(array_merge([$adminEmail], $additionalRecipients)));
    $successCount = 0;
    
    // Add an extra parameter to the mail function to prevent being marked as spam
    // This sets the envelope sender, which is crucial for deliverability.
    $safe_sender_param = "-f" . $fromEmail; 

    // Send separate email to each recipient (This is already correct)
    foreach ($recipients as $recipient) {
        // Use the fifth parameter for the safe sender envelope address
        if (mail($recipient, $subject, $body, $headers, $safe_sender_param)) {
            $successCount++;
        }
    }

    // Final response for the client (React component)
    if ($successCount === count($recipients)) {
        echo "success"; // SUCCESS must be the exact response text for the React component
    } else {
        // This response triggers the client's "Error sending email..." message
        echo "Error: Mail function failed to send to all recipients. Check server logs.";
    }

} else {
    echo "Invalid request";
}
?>