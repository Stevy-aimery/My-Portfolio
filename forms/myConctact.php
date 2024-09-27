<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire et les assainir
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Vérifier que les champs ne sont pas vides
    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        // Adresse email de destination
        $to = "stevyaimery@gmail.com";

        // Sujet de l'email
        $email_subject = "New message from: $name - $subject";

        // Corps de l'email
        $email_body = "You have received a new message from your website contact form.\n\n";
        $email_body .= "Here are the details:\n\n";
        $email_body .= "Name: $name\n";
        $email_body .= "Email: $email\n";
        $email_body .= "Subject: $subject\n";
        $email_body .= "Message:\n$message\n";

        // En-têtes de l'email
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";

        // Envoyer l'email
        if (mail($to, $email_subject, $email_body, $headers)) {
            echo "Your message has been sent successfully!";
        } else {
            echo "There was an error sending your message. Please try again later.";
        }
    } else {
        echo "Please fill in all fields.";
    }
} else {
    echo "Invalid request.";
}
?>
