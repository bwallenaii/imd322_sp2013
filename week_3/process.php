<?php

$filtered = (Object) filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

$message = "Entrant Name: $filtered->name\r\n";
$message .= "Email: $filtered->email\r\n";

switch($filtered->contest)
{
	case "babies":
		$message .= "Baby name: $filtered->baby_name\r\n";
		$newfile = "uploads/babies/".time().$_FILES['baby_picture']['name'];
		if($_FILES['baby_picture']['error'] == 0)
		{
			move_uploaded_file($_FILES['baby_picture']['tmp_name'], $newfile);
		}
		$message .= "File: $newfile";
	break;
	case "puppy":
		$message .= "Puppy name: $filtered->puppy_name\r\n";
		$newfile = "uploads/puppies/".time().$_FILES['puppy_picture']['name'];
		if($_FILES['puppy_picture']['error'] == 0)
		{
			move_uploaded_file($_FILES['puppy_picture']['tmp_name'], $newfile);
		}
		$message .= "File: $newfile";
	break;
	case "awkward":
		$message .= "Family name: $filtered->family_name\r\n";
		$newfile = "uploads/awkward/".time().$_FILES['family_picture']['name'];
		if($_FILES['family_picture']['error'] == 0)
		{
			move_uploaded_file($_FILES['family_picture']['tmp_name'], $newfile);
		}
		$message .= "File: $newfile";
	break;
	default:
		// no contest chosen
		die("No contest chosen");
	break;
}

mail("brentdevdummy@gmail.com", "Entry", $message);
?>
<html>
<head>
	<title>Thanks!</title>
</head>
<body>
<h3>Thanks for your submission!</h3>
<p>The winner will be announced on January 18, 3026. 
Only entries arriving before April 12, 2010 will be considered.</p>
</body>
</html>