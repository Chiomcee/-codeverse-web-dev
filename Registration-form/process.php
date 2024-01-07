<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username =$_POST["username"];
    $email = $_POST["email"];

    // Perform necessary validation and database operation here

    $_SESSION["username"] = $username;

    //Redirects the user to the success page
    header("Location: success.php");
    exit();
}
?>