let fName = document.getElementById("fName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let lName = document.getElementById("lName");
let phoneNumber = document.getElementById("phoneNumber");
let confirmPassword = document.getElementById("confirmPassword");

document.getElementById("btn").addEventListener("click", (e) => {
  if (fName.value == "" || fName.value == null) {
    document.getElementById("fNameMsg").textContent = "Please Enter First Name";
  } else {
    document.getElementById("fNameMsg").textContent = "";
  }

  if (email.value == "" || email.value == null) {
    document.getElementById("emailMsg").textContent = "Please Enter Your email";
  } else {
    document.getElementById("emailMsg").textContent = "";
  }
  if (password.value.length == 0) {
    document.getElementById("passwordMsg").textContent =
      "Please Enter Password";
  } else {
    document.getElementById("passwordMsg").textContent = "";
  }
  if (lName.value == "" || lName.value == null) {
    document.getElementById("lNameMsg").textContent = "Please enter last name";
  } else {
    document.getElementById("lNameMsg").textContent = "";
  }
  if (phoneNumber.value == "" || phoneNumber.value == null) {
    document.getElementById("phoneNumberMsg").textContent =
      "Please Enter Your phone number";
  } else {
    document.getElementById("phoneNumberMsg").textContent = "";
  }
  if (confirmPassword.value == "" || confirmPassword.value == null) {
    document.getElementById("confirmPasswordMsg").textContent =
      "Please confirm your password";
  } else {
    document.getElementById("confirmPasswordMsg").textContent = "";
  }
  if (confirmPassword.value != password.value) {
    document.getElementById("confirmPasswordMsg").textContent =
      "Password doesn't match";
  }
});
