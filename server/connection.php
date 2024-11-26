<?php
    // Created by Dejan Dojcinoski L5574493 2023
    header("Access-Control-Allow-Origin: *");
    //Servername
    $server = "localhost";
    //Username
    $user = "root";
    //Password
    $password = "";
    //Name of the Database
    $database = "register_db";

    // Establish connection to database
    $conn = new mysqli($server, $user, $password);
    $link = mysqli_connect($server, $user, $password, $database);

    mysqli_set_charset($conn, "utf8");
    //Check connection
    if($conn->connect_error){
        die("Connection lost" . $conn->connect_error);
    }
?>

