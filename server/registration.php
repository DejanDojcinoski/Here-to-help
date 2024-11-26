<?php
    // Created by Dejan Dojcinoski L5574493 2023
    // Establish connection to database
    include("connection.php");
    //Include the functions php file to generate an unique id. 
    include("functions.php");
    
    header("Access-Control-Allow-Origin: *");

    // Created by Dejan Dojcinoski L5574493 2023
    //Set variables for all fields to add to db when register as a new user.
    $username = $_POST['username'];
    $email = $_POST['email'];
	$town = $_POST['town'];
	$password = $_POST['password'];
    $user_id = random_num(20);

    // Insert to db named users.
    mysqli_query($link, "INSERT INTO users(user_id,username,email,town,password) 
                VALUES('$user_id', '$username', '$email', '$town', '$password')");
    // Direct to login page.
    header("Location: ../client/www/login.html");
?>

