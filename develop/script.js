//console.log("it works right?")
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    window.prompt("Between 8-128, how many charaters do you need in your password")
    window.confirm("Do you Need uppercase characters in your password?")
    window.confirm("Do you need numbers in your password?")
    window.confirm("Do you need special characters in your password?")
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function myFunctin() {
    // window.prompt("Between 8-128, how many charaters do you need in your password")
// window.confirm("Do you Need uppercase characters in your password?")
// window.confirm("Do you need numbers in your password?")
// window.confirm("Do you need special characters in your password?")
// ;
//   }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

generate passwords needs to ask confirms and save responses


WHEN prompted for password criteria
THEN I select which criteria to include in the password



WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

use promp fucntion to confirm length of password 
use if statements to confirm password lenght
if 7> or 128< fail
if 8-128 move to next prompt

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

use confirms to save character types needed for password 

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

find w3school on operators

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

make password using user input

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

console.log(makeid(5));
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/



