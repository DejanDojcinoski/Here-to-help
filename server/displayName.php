<?php
// Created by Dejan Dojcinoski L5574493 2023
    session_start();
    // Establish connection to database
    include("connection.php");
    // Session vaiable for username when logged in. 
    echo $_SESSION['username'];

?>
