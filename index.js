// This will be our NODE SERVER file


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of your project:'
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process, if applicable: ",
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide examples for use of your project:'
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors to this projects?"
    },
    {
        type: "input",
        name: "screenshot",
        message: "Please attach a screenshot of your project (either a .png or a .jpg)"
    },
    {
        type: "input",
        name: "questions",
        message: "What should I do if I have any further questions? (Ex. Please feel free to reach out to me if you have any questions)"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address: "
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: 'input',
        name: 'repo',
        message: "Enter the link to your GitHub Repo",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required.");
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla', 'Apache', 'MIT', 'Boost Software', 'The Unlicense']

    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Call the generateMarkdown(...parameters)

    // Write the returned STRING to a new file
    // call your fs READ/Write methods
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        //const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile('ReadMeExample.md', generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    }).catch(function (error) {
        console.log(error);
    });
}

// Function call to initialize app
init();
