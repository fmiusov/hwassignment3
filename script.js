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
  var passwordlength = parseInt(
    prompt("How many characters do you want in your password?")
  );
  if (isNaN(passwordlength)) {
    alert(
      "Wow...are you stupid? That isn't a number. Click the red button and do it right next time."
      // ok, so it isn't exactly a good user experience, but I kind of wish errors read this way
    );
  } else {
    var upperConfirm = confirm("Should it contain uppercase characters?");
    var lowerConfirm = confirm("How about lowercase characters?");
    var numberConfirm = confirm("Do you want numbers?");
    var specialConfirm = confirm("Finally...any special characters?");

    if (upperConfirm) {
      var passwordSelection = passwordSelection.concat(uppercase);
    }
    if (lowerConfirm) {
      var passwordSelection = passwordSelection.concat(lowercase);
    }
    if (numberConfirm) {
      var passwordSelection = passwordSelection.concat(numbers);
    }
    if (specialConfirm) {
      var passwordSelection = passwordSelection.concat(symbols);
    }
    var customPassword = [];
    for (var i = 0; i < passwordlength; i++) {
      var x = Math.floor(Math.random() * passwordSelection.length);
      var customPassword = customPassword.concat(passwordSelection[x]);
    }
  }

  return (customPassword = customPassword.join(""));
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function copypass() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function confirmcopy() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
