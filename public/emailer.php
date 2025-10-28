<?php
session_start();
// Temporarily enable error reporting to debug any future issues easily
// REMOVE these lines after deployment if you want to suppress errors
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// =======================================================
// CORS HEADERS: Allows cross-origin POST requests
// =======================================================
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST, OPTIONS');
// Allows the 'Content-Type: application/json' header
header('Access-Control-Allow-Headers: Content-Type');

// Handle the preflight request (OPTIONS method)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
// =======================================================

function ValidateEmail($value)
{
    return (filter_var($value, FILTER_VALIDATE_EMAIL)) ? true : false;
}

function validate_mobile($phone)
{
    // Allows only 10 digits
    return preg_match('/^[0-9]{10}$/', $phone);
}

// =======================================================
// DATA HANDLING: Reads JSON input from the frontend
// =======================================================
$json_data = file_get_contents('php://input');
$post_data = json_decode($json_data, true); 

// Check if data is valid
if (empty($post_data) || !is_array($post_data)) {
    http_response_code(400);
    die('<p style="color:red;">Invalid JSON data received.</p>');
}

// Process data from the JSON payload
if ($post_data) {
    // Basic validation fields
    $name = trim($post_data['name'] ?? '');
    $email = trim($post_data['email'] ?? '');
    $phone = trim($post_data['phone'] ?? '');
    
    // Additional fields from payload
    $from = trim($post_data['form_source'] ?? 'Unknown Source'); 
    $spreadsheet = trim($post_data['spreadsheet'] ?? '');
    
    // 💡 FIXED: Get additionalRecipients without trim() to handle array type
    $additionalRecipients = $post_data['additionalRecipients'] ?? []; 
    
    // Use the custom subject from the payload
    $subject = trim($post_data['subject'] ?? "Enquiry from $from"); 
    $error = '';

    // --- Validation ---
    if (empty($name)) die('<p style="color:red;">Please enter your Name</p>');
    if (empty($email)) die('<p style="color:red;">Please enter an e-mail address</p>');
    if (!ValidateEmail($email)) die('<p style="color:red;">Please enter a valid e-mail address</p>');
    if (empty($phone)) die('<p style="color:red;">Please enter your phone</p>');
    if (!validate_mobile($phone)) die('<p style="color:red;">Enter 10 digit mobile number</p>');

    // --- Build HTML message (for mail function) ---
    $message_body = '
        <html>
        <head>
            <title>' . htmlspecialchars($subject) . '</title>
        </head>
        <body>
            <p><strong>Name:</strong> ' . htmlspecialchars($name) . '</p>
            <p><strong>Email:</strong> ' . htmlspecialchars($email) . '</p>
            <p><strong>Phone Number:</strong> ' . htmlspecialchars($phone) . '</p>
            <p><strong>Additional Information:</strong></p>
        ';

    // Add all other fields to Additional Info
    foreach ($post_data as $key => $value) {
        if (!is_array($value) && !in_array($key, ['name', 'email', 'phone', 'spreadsheet', 'subject', 'form_source', 'additionalRecipients'])) {
            $message_body .= '<p style="margin-left:10px"><strong>' . ucfirst(htmlspecialchars($key)) . ':</strong> ' . nl2br(htmlspecialchars($value)) . '</p>';
        }
    }
    $message_body .= '</body></html>';

    // --- Email Headers ---
    $sender_email = 'noreply@earagroup.com';
    // Sets the visible sender name to "noreply"
    $headers = "From: noreply <" . $sender_email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // --- Recipients List ---
    $recipients = ['lokesh@imsolutions.mobi'];

    // Handle additional recipients (guaranteed to be an array)
    if (!empty($additionalRecipients) && is_array($additionalRecipients)) {
        $recipients = array_merge($recipients, $additionalRecipients);
    }

    // --- Envelope Sender (Bounce Address via -f option) ---
    $envelope_sender = '-f ' . $sender_email;

    // --- Send Email using PHP mail() function ---
    $all_sent = true;
    foreach ($recipients as $recipient) {
        if (ValidateEmail($recipient)) {
            // mail(to, subject, message, headers, additional_parameters)
            if (!mail($recipient, $subject, $message_body, $headers, $envelope_sender)) {
                $all_sent = false;
            }
        }
    }

    // --- Save to Google Sheet (COMMENTED OUT) ---
    /*
    if (!empty($spreadsheet)) {
        // NOTE: Ensure this path is correct relative to your script
        // You might need to change the path:
        include './../../clients-website/utilities/google/vendor/autoload.php';

        try {
            $client = new Google_Client();
            $client->setApplicationName('google sheet');
            $client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);
            $client->setAccessType('offline');
            $client->setAuthConfig('./../../clients-website/utilities/google/My Project 34423-e76a5ec1940f.json');

            $service = new Google_Service_Sheets($client);
            $spreadsheetId = $spreadsheet; 
            $range = "A1:Z1";

            $values = [
                [date('m-d-y'), $name, $phone, $email]
            ];

            $body = new Google_Service_Sheets_ValueRange(['values' => $values]);
            $params = ['valueInputOption' => 'RAW'];
            $insert = ['insertDataOption' => 'INSERT_ROWS'];

            $service->spreadsheets_values->append($spreadsheetId, $range, $body, $params, $insert);
        } catch (Exception $e) {
            // Fail silently
        }
    }
    */
    // --- Final Response ---
    if ($all_sent) {
        echo "OK";
    } else {
        // Return a clear error message if email failed
        echo '<p style="color:red;">Error: Email submission failed.</p>';
    }
}
?>