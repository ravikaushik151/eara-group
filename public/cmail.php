<?php
header('Content-Type: text/plain'); // Ensure the response is plain text

// --- Configuration ---
// Main recipient
$adminEmail = "lokesh@imsolutions.mobi";  
// Additional recipients
$additionalRecipients = ['ravi.k@imsolutions.mobi', 'lokesh@imsolutions.mobi']; 
// MUST be a verified, existing email on your domain for best delivery and spam prevention.
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
        echo "Error: Name, email, and phone are required.";
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

    // Common headers - Using Reply-To for the user's email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    // Sender is a non-monitored, internal address (Use Reply-To to respond to the user)
    $headers .= "From: EARA Group Contact Form <$fromEmail>" . "\r\n"; 
    // This allows the recipient to hit 'Reply' and send a message back to the user
    $headers .= "Reply-To: $name <$email>" . "\r\n"; 

    // Prepare all recipients in one array and remove duplicates
    $recipients = array_unique(array_filter(array_merge([$adminEmail], $additionalRecipients)));
    $successCount = 0;
    
    // Use the fifth parameter to set the envelope sender, which helps prevent spam
    $safe_sender_param = "-f$fromEmail"; 

    // Send separate email to each recipient
    foreach ($recipients as $recipient) {
        // Use the optional fifth parameter for better mail delivery
        if (mail($recipient, $subject, $body, $headers, $safe_sender_param)) {
            $successCount++;
        }
    }

    // Final response for the client (React component)
    if ($successCount === count($recipients)) {
        echo "success"; // ECHO ONLY 'success' for the client to read
    } else {
        // Detailed error message if some mails failed
        echo "Error: Partial failure - Only $successCount of " . count($recipients) . " emails were sent successfully. Check mail server logs.";
    }

} else {
    echo "Invalid request method";
}
?>