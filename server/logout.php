<?php
// Created by Dejan Dojcinoski L5574493 2023
    session_start();

    //Remove all the session variables.
    session_unset();

    //Destroy the session.
    session_destroy();
    
    
    
    // Direct to the landing page.
    header("Location: ../client/www/index.html");
    
?>







