<?php
    include("connection.php");

    $firstName = $_GET['first_name'];
    $lastName = $_GET['last_name'];
    $company = $_GET['company'];
    $rank = $_GET['rank'];
    $email = $_GET['email'];
    $phone = $_GET['phone'];
    $address = $_GET['address'];
    $website = $_GET['website'];
    $city = $_GET['city'];
    $state = $_GET['state'];
    $postCode = $_GET['postCode'];
    $country = $_GET['country'];
    $companyHistory = $_GET['companyHistory'];
    $requirements = $_GET['requirements'];

    $insertQuery = "INSERT INTO clients VALUES ('$firstName','$lastName','$company','$rank','$email','$phone','$address',
    '$website','$city','$state','$postCode','$country','$companyHistory','$requirements')";

    // echo $firstName;
    mysqli_query($conn, $insertQuery);
    header("Location: http://localhost/Dialer-Panel/index.php");
?>