var passObj = {
    lowercase: genLow,
    uppercase: genUp,
    number: genNum,
    symbol: genSym
  };
  
  
  function genLow() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  
  function genUp() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  
  function genNum() {
      return parseInt(String.fromCharCode(Math.floor(Math.random() * 10) + 48));
  }
  
  function genSym() {
      var symbols = " !@#$%^&*(){}[]=<>/,."
      return symbols[Math.floor(Math.random() * symbols.length)];
  }
  
  
  
  
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function generatePassword() {
    
  }
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    var length = parseInt(prompt("How many characters do you want in your password?"))
    var uppercase = confirm("Should it contain uppercase characters?")
    var lowercase = confirm("How about lowercase characters?")
    var numbers = confirm("Do you want numbers?")
    var symbols = confirm("Finally...any special characters?")
    
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  // ```
  // GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  // ```
  