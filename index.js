const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: "Enter project title",
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter project description',
        name: 'description'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data, callback) {
    fs.writeFile(fileName, data, callback);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => generateMarkdown(data, function(markdown) {
        writeToFile('./outputs/README.md', markdown, (err => console.log(err)));
    }))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
