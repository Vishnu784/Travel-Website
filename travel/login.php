<?php
$conn = mysqli_connect('localhost','root','','login');

 $username = $_POST['Username'];
$email = $_POST['email'];

$password = $_POST['password'];
 $confirmpassword = $_POST['cpass'];
if($conn){
  echo "connection successful";
}
else {
  echo "database connection failed ".mysqli_connect_error();
}














?>