<?php
    // Created by Dejan Dojcinoski L5574493 2023
    session_start();
    // Establish connection to database
    include("connection.php");

    header("Access-Control-Allow-Origin: *");
    //Check if post have an id.
    if(isset($_POST["id"])) {
        //Set the post id to a variable.
        $iD = $_POST["id"];
        $sql_deleteUserPost = "DELETE FROM posts WHERE id = $iD";
        if(mysqli_query($link, $sql_deleteUserPost)){
            echo 1;
        }
        else {
            echo 2;
        }
    }
    
    // Close the connection to the db
    $conn->close();
?>

