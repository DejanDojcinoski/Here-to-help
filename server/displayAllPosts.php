<?php
    // Created by Dejan Dojcinoski L5574493 2023
    session_start();
    // Establish connection to database
    include("connection.php");

    header("Access-Control-Allow-Origin: *");
	
    // Creating an array to hold all values.
    $data = [];
    //SQL query for retrieving the data from all posts 
    //including the username and returned in descending order.
    $sql_allPosts = "SELECT username, title, content, childfriendly, dogfriendly, 
            neutered, email_phone, contact_info FROM posts ORDER BY date DESC";
    
    // Store the result from the sql query
    $result_allPosts = mysqli_query($link, $sql_allPosts) or die (mysqli_connect($link));

    //Check if there is data
    if(mysqli_num_rows($result_allPosts) > 0) {
        // Loop through the result from the sql querry and
        //push it to the end of the array.
        while($row = mysqli_fetch_array($result_allPosts)) {
            array_push($data,$row);
        }
    }
    // Return the data   
    echo json_encode($data);

    // Close the connection to the db
    $conn->close();
?>




