<?php
// check if fields passed are empty
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) || !FILTER_VAR($_POST['email'], FILTER_VALIDATE_EMAIL)) {
	echo "No arguments Provided!";
	return false;
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];

// create email body and send it
$to = "bhamodi@uwaterloo.ca"; // my email
$email_subject = "Email submitted by:  $name";
$email_body = "You have received a new message. \n".
				  "Here are the details:\n\nName: $name \n".
				  "Email: $email_address\nMessage:\n$message";
$headers = "From: $email_address\n";
$headers = "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
