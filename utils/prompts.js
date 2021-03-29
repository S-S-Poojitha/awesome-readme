const inquirer = require('inquirer');
const { getLicenseNames } = require('./licenses');

const questions = [
    {
        type: 'input',
        message: 'Enter your Github username',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email'
    },
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
    {
        type: 'list',
        choices: getLicenseNames(),
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Enter test instructions',
        name: 'tests'
    },
];

async function runPrompt() {
   return await inquirer.prompt(questions);
}

module.exports = runPrompt; 