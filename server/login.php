<?php
    // Created by Dejan Dojcinoski L5574493 2023
    session_start();
    // Establish connection to database
    include("connection.php");

    header("Access-Control-Allow-Origin: *");
    // Created by Dejan Dojcinoski L5574493 2023
    // Setting the vairables for the email and password.
    $email = $_POST['email'];
    $password = $_POST['password'];
	
    //SQL query for retrieving the username and userID where email is 
    //current email and password is current password.
    $sql_user = "SELECT username, user_id FROM users WHERE email = '$email' AND password = '$password'";
    
    // Store the result from the sql query
    $result_user = mysqli_query($link, $sql_user) or die (mysqli_connect($link));
    
    // Check if there is data returned.
    // If num of rows returned is 0, then there is no registered user with
    // the provided email and password
    if ((mysqli_num_rows($result_user) < 1)){
        echo 1;
    }
    // Created by Dejan Dojcinoski L5574493 2023
    // Otherwise the username and password has been found in the db.
    else{
        //Saving the result as an associative array called row.
        $row = mysqli_fetch_array($result_user);
        //Setting the session variable for username and user id. 
        $_SESSION['username'] = $row['username'];
        $_SESSION['user_id'] = $row['user_id'];
        echo 2;
    }
    // Close the connection to the db
    $conn->close();
?>

