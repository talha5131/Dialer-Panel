<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "clients data";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if ($conn) {
        // echo "Connection OK";
    }
    else{
        die("Connection Failed Because Of ".mysqli_connect_error());
    }

?>