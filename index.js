// This will be our NODE SERVER file


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'first',
    message: 'What is your first name?'
},
{
    type: 'input',
    name: 'last',
    message: 'What is your last name?'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        // Call the generateMarkdown(...parameters)

        // Write the returned STRING to a new file
        // call your fs READ/Write methods
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        console.log(answers);
        console.log(answers.first);
        console.log(answers.last);
    }).catch(function(error) {
        console.log(error);
    });
}

// Function call to initialize app
init();
