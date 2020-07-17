// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var pw = "";
  var pool = [];

  let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "\\", "/", ":", ";", "\"", "'", "<", ">", ",", ".", "?"];

  var length = prompt("How many characters?");
  if (length < 8) {
    alert("Password is too short");
    return "Generate again";
  }
  if (length > 128) {
    alert("Password is too long");
    return "Generate again"
  }
  if (isNaN(length)) {
    alert("Please input a number");
    return "Generate again"
  }

  var allowLow = confirm("Allow lowercase characters?");
  if (allowLow == true) {
    pool.push(lower);
  }
  var allowUpp = confirm("Allow uppercase characters?");
  if (allowUpp == true) {
    pool.push(upper);
  }
  var allowNum = confirm("Allow numbers?");
  if (allowNum == true) {
    pool.push(number);
  }
  var allowSpec = confirm("Allow special?");
  if (allowSpec == true) {
    pool.push(special);
  }
  
  return pw;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
