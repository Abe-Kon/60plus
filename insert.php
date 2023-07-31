<?php
 	$servername= "localhost";
    $username="root";
    $password="";
    $dbname="sixtyplusfoundation";


$con = mysqli_connect($servername,$username,$password,$dbname);

$firstname= $_GET['firstname'];
$email=$_GET['email'];


$sql = "INSERT INTO Donations (firstname,email) VALUES ('{$firstname}', '{$email}')";

if (mysqli_query($con, $sql))
	echo "New record created successfully";
else
	echo "Failed";

?>