//your code here
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $gender = $_POST['gender'];
  $carBrand = $_POST['cars'];
  $age = $_POST['age'];
  $dob = $_POST['dob'];
  $phoneNumber = $_POST['tel'];
  $password = $_POST['password'];
  $tosAgreement = isset($_POST['tos']) ? 'Agreed' : 'Not Agreed';

  // Process the form data (you can add your own logic here)
  // For example, you can store the data in a database or send it via email

  // Display a success message
  echo "Form submitted successfully!";
} else {
  // Redirect or show an error message if accessed directly without form submission
  echo "Error: Invalid request!";
}
?>
