const inquirer = require('inquirer');

const licenses = [
    {
        name: 'GNU AGPLv3',
        linkName: 'GNU_AGPLv3',
        link: 'https://choosealicense.com/licenses/agpl-3.0/'
    },
    {
        name: 'GNU GPLv3',
        linkName: 'GNU_GPLv3',
        link: 'https://choosealicense.com/licenses/gpl-3.0/'
    },
    {
        name: 'GNU LGPLv3',
        linkName: 'GNU_LGPLv3',
        link: 'https://choosealicense.com/licenses/lgpl-3.0/'
    },
    {
        name: 'Mozilla Public License 2.0',
        linkName: 'Mozilla_Public_License_2.0',
        link: 'https://choosealicense.com/licenses/mpl-2.0/'
    },
    {
        name: 'Apache License 2.0',
        linkName: 'Apache_License_2.0',
        link: 'https://choosealicense.com/licenses/apache-2.0/'
    },
    {
        name: 'MIT License',
        linkName: 'MIT_License',
        link: 'https://choosealicense.com/licenses/mit/'
    },
    {
        name: 'Boost Software License 1.0',
        linkName: 'Boost_Software_License_1.0',
        link: 'https://choosealicense.com/licenses/bsl-1.0/'
    },
    {
        name: 'The Unlicense',
        linkName: 'The_Unlicense',
        link: 'https://choosealicense.com/licenses/unlicense/'
    }
];

function getLicenseNames() {
    let lNames = [];
    for (const license of licenses) {
        lNames.push(license.name);
    }
    return lNames;
}

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
        message: 'Enter test instructions',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines',
        name: 'contributing'
    }
];

async function runPrompt() {
   return await inquirer.prompt(questions);
}

module.exports = {
    runPrompt,
    licenses    
};