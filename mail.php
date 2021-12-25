<?php


if (isset($_POST)) {

    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'];
    $email = $data['email'];
    $phone = $data['phone'];
    $message = $data['message'];
    $address = $data['address'];


    $to = "info@pesahoidja.ee";
    $subject = 'Päring Pesahoidja veebilehelt';
    $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=utf-8'];
    
    
    
    $body ="
        <html>
        <head>
        <title>Päring</title>
        </head>
        <body>

        <h3>Päring Pesahoidja veebilehelt</h3>
        <br>
        <p><b>Nimi:</b> {$name}</p>
        <p><b>Email:</b> {$email}</p>
        <p><b>Telefon:</b> {$phone}</p>
        <p><b>Teade:</b> {$message}</p>
        <p><b>Aadress:</b> {$address}</p>

        </body>
        </html>
        ";
        
    $success = mail($to, $subject, $body, $headers);
    if ($success) {
        echo "Success!";
    }
    else {
        echo "Fail";
    }
}


?>