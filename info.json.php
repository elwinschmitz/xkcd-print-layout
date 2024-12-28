<?php

header("Content-Type: application/json");

$num = $_GET['num'];

// Check if $num is only digits
if ( !isset($num) || !ctype_digit($num) || $num < 1 ) {
  $num = "";
} else {
  $num = "$num/";
}

echo file_get_contents("https://xkcd.com/" . $num . "info.0.json");
