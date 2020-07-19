// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate password
function generatePassword() {
  var pw = [];
  var pool = [];
  
  let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "\\", "/", ":", ";", "\"", "'", "<", ">", ",", ".", "?"];
  
  // Length
  var length = prompt("How many characters?");
  if (length < 8) {
    alert("Password is too short");
    return "Generate again";
  }
  if (length > 128) {
    alert("Password is too long");
    return "Generate again";
  }
  if (isNaN(length)) {
    alert("Please input a number");
    return "Generate again";
  }
  
  // Character types
  var allowLow = confirm("Allow lowercase characters?");
  if (allowLow === true) {
    pool = pool.concat(lower);
  }
  var allowUpp = confirm("Allow uppercase characters?");
  if (allowUpp === true) {
    pool = pool.concat(upper);
  }
  var allowNum = confirm("Allow numbers?");
  if (allowNum === true) {
    pool = pool.concat(number);
  }
  var allowSpec = confirm("Allow special characters?");
  if (allowSpec === true) {
    pool = pool.concat(special);
  }
  if (pool.length < 1) {
    alert("Must choose at least one character type");
    return "Generate again";
  }
  
  // Appending from pool randomly
  for (var i=0; i < length; i++) {
    var x = pool[Math.floor(Math.random() * pool.length)];
    pw.push(x);
  }

  // Display password
  pw = pw.join("");
  return pw;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
