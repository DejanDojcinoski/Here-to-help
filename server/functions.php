<?php
// Created by (Quick Programming, 2020)
// Commented by Dejan Dojcinoski 2023

// $length equals whatever number is passed in
function random_num($length)
    {

	$text = "";
	
	// $len is the new length 
	//(a random number between 4 and the value of $length)
	$len = rand(4,$length);
	// The for loop will generate a random number and the 
	//length will be determined by the value of $len
	for ($i=0; $i < $len; $i++) { 

		$text .= rand(0,9);
	}

	return $text;
    }


	