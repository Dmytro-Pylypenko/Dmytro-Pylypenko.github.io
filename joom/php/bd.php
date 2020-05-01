<?php
$servername = "localhost";
$database = "joom";
$username = "root";
$password = "";

// Create connection

$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection


if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}
 
 $name = $_POST['name'];
 $email = $_POST['email'];
 $subject = $_POST['subject'];
 $message = ($_POST['message']);

$sql="INSERT INTO `contacts`  (`name`, `email`, `subject`, `message`) 
VALUES ('$name', '$email', '$subject', '$message')";
if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);

?>