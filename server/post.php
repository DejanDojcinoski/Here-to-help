<?php
    // Created by Dejan Dojcinoski L5574493 2023
    session_start();
    // Establish connection to database
    include("connection.php");
   
    header("Access-Control-Allow-Origin: *");
    // Created by Dejan Dojcinoski L5574493 2023
    // Setting the vairables for the userID and username.
    $user_id = $_SESSION['user_id'];
    $username = $_SESSION['username'];
    
    //Set variables for all fields when creating a post to add to db.
    $title = $_POST['title'];
    $content = $_POST['content'];
    $childfriendly = $_POST['childfriendly'];
    $dogfriendly = $_POST['dogfriendly'];
    $neutered = $_POST['neutered'];
    $emailPhone = $_POST['emailPhone'];
    $contactInfo = $_POST['contactInfo']; 
    
    // Insert to db named posts.
    mysqli_query($link, "INSERT INTO posts(user_id,username,title,content,childfriendly,dogfriendly,neutered,email_phone,contact_info) 
    VALUES('$user_id', '$username', '$title', '$content', '$childfriendly', '$dogfriendly', '$neutered','$emailPhone', '$contactInfo')");
    // Direct to browse page.
    header("Location: ../client/www/browse.html");
?>


