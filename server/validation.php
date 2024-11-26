<?php
    // Created by Dejan Dojcinoski L5574493 2023
    // Establish connection to database
    include("connection.php");
    //include("functions.php");
    header("Access-Control-Allow-Origin: *");
    // Created by Dejan Dojcinoski L5574493 2023
    // Setting the vairables for the username and email.
    $username = $_POST['username'];
    $email = $_POST['email'];
	
    //SQL queries for retrieving all entries where username is current username.
    $sql_user = "SELECT * FROM users WHERE username = '$username'";
    //SQL queries for retrieving all entries where email is current email.
    $sql_email = "SELECT * FROM users WHERE email = '$email'";

    // Store the result from the sql query
    $result_user = mysqli_query($link, $sql_user) or die (mysqli_connect($link));
    $result_email = mysqli_query($link, $sql_email) or die (mysqli_connect($link));

    // Check if both username and email are registered.
    if((mysqli_num_rows($result_user) > 0)&&(mysqli_num_rows($result_email) > 0)){
        echo 3;
    }
    //Check if the username has been registered but not email.
    else if(mysqli_num_rows($result_user) > 0){
        echo 1;
    }
    //Check if the email has been registered but not username.
    else if(mysqli_num_rows($result_email) > 0){
        echo 2;
    }
   
    //Close the connection to the db
    $conn->close();
?>

