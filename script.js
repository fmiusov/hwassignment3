// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  var uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  var lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = [
    " ",
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+"
  ];
  var passwordSelection = [];
  var length = parseInt(
    prompt("How many characters do you want in your password?")
  );
  var u = confirm("Should it contain uppercase characters?");
  var l = confirm("How about lowercase characters?");
  var n = confirm("Do you want numbers?");
  var s = confirm("Finally...any special characters?");

  if (u) {
    var passwordSelection = passwordSelection.concat(uppercase);
  }
  if (l) {
    var passwordSelection = passwordSelection.concat(lowercase);
  }
  if (n) {
    var passwordSelection = passwordSelection.concat(numbers);
  }
  if (s) {
    var passwordSelection = passwordSelection.concat(symbols);
  }
  var customPassword = [];
  for (var i = 0; i < length; i++) {
    
    var x = Math.floor(Math.random() * passwordSelection.length)
    var customPassword = customPassword.concat(passwordSelection[x]);
  }
  
  return customPassword = customPassword.join("");
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

