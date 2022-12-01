// Define global variables
let lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
let upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialChar = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
let choiceLength = ""; 
let choiceLowerCase, choiceUpperCase, choiceSpecialChar, choiceNumber;
let optionValues = [];
let newPassword = "";

// Password length prompt function

function lengthPrompt() {
  choiceLength = window.prompt("How many characters would you like your password to be? Please type your choice as a number");
  if (choiceLength === null) {
    window.alert("Please enter preferred length of the password");
    lengthPrompt();
  } else if (choiceLength < 8 || choiceLength > 128) {
    window.alert("Invalid value entered! Please enter a number between 8 and 128");
  } 
}

// Lower case alphabet letters prompt function

function lowerCaseCharPrompt() {
  choiceLowerCase = window.confirm("Would you like to include lower case letters? Click 'OK' if yes and 'Cancel' for no");
  if (choiceLowerCase == true) {
    optionValues = optionValues.concat(lowerCase)
  }
}

// Upper case alphabet letters prompt function

function upperCaseCharPrompt() {
  choiceUpperCase = window.confirm("Would you like to include upper case letters? Click 'OK' if yes and 'Cancel' for no");
  if (choiceUpperCase == true) {
    optionValues = optionValues.concat(upperCase)
  }
}

// Number prompt function

function numberPrompt() {
  choiceNumber = window.confirm("Would you like to include numbers? Click 'OK' if yes and 'Cancel' for no");
  if (choiceNumber == true) {
    optionValues = optionValues.concat(numbers)
  }
}

// Special character prompt function

function specialCharPrompt() {
  choiceSpecialChar = window.confirm("Would you like to include special characters? Click 'OK' if yes and 'Cancel' for no");
  if (choiceSpecialChar == true) {
    optionValues = optionValues.concat(specialChar)
  }
}

// Consolidate prompts into one function

function executePrompts() {
  lowerCaseCharPrompt();
  upperCaseCharPrompt();
  numberPrompt();
  specialCharPrompt();
}

// Check whether at least one character type is true function

function characterCheck() {
  if ((choiceLowerCase == false && choiceUpperCase == false && choiceNumber == false && choiceSpecialChar == false)) {
    window.alert("You must include at least one character type in your password! Let's try that again");
  executePrompts();
}
}

// Generate password function

function generatePassword() {
  lengthPrompt();
  executePrompts();
  characterCheck();
  for (let i = 0; i < choiceLength; i++) {
    var random = Math.floor(Math.random() * (optionValues.length));
    newPassword = newPassword + optionValues[random];
  }
  let passwordText = document.querySelector("#password");
  passwordText.textContent = newPassword;
  }

// Run generate password function when Generate button is clicked

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword);