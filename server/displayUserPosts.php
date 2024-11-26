<?php
    // Created by Dejan Dojcinoski L5574493 2023
    session_start();
    // Establish connection to database
    include("connection.php");
    
    header("Access-Control-Allow-Origin: *");

    // Created by Dejan Dojcinoski L5574493 2023
    // Session vaiable for userID when logged in. 
    $userId = $_SESSION['user_id'];
    // Creating an array to hold all values.
    $data = [];
    
    //SQL query for retrieving the data where userID is current userID.
    $sql_userPosts = "SELECT id, title, content, childfriendly, dogfriendly, neutered, 
    email_phone, contact_info FROM posts WHERE user_id = '$userId' ORDER BY date DESC";
    
    // Store the result from the sql query
    $result_userPosts = mysqli_query($link, $sql_userPosts) or die (mysqli_connect($link));
    
    //Check if there is data
    if(mysqli_num_rows($result_userPosts) > 0) {
        // Loop through the result from the sql querry and
        //push it to the end of the array.
        while($row = mysqli_fetch_array($result_userPosts)) {
            array_push($data,$row);
        }
    }
    //Return the data   
    echo json_encode($data);

    // Close the connection to the db
    $conn->close();
?>

