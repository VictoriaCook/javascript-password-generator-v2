# 03 JavaScript: Password Generator

## Random Password Generator

This is an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code. It has a clean and polished, responsive user interface that adapts to multiple screen sizes.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## How the Random Password Generator Works

* Once the user clicks on the button 'Generate Password', the user receives a series of prompts asking about their preference for the password, being password length and whether to include lower case characters, upper case characters, special characters or numbers.
* If the user does not elect to include any characters, the generator alerts the user that at least one type of character must be selected and starts the prompts again for the user
* Once all prompts have been properly completed, a random password is generated and appears in the 'Your Secure Password' box

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

## Deployed URL

The URL for the deployed page is here: https://victoriacook.github.io/javascript-password-generator

---

## Licence

The Licence for this project is MIT.
