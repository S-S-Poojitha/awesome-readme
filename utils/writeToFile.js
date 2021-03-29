const fs = require('fs');
const { resolve } = require('path');
const generateMarkdown = require('./generateMarkdown');
const FILE_PATH = './output/README.md'

function writeToFile(answers) {
        console.log('Creating README.md');
        const markdown = generateMarkdown(answers);
        fs.writeFile(FILE_PATH, markdown, (err) => {
                if (err) throw err;
                console.log(`README.md file created at ${resolve(FILE_PATH)}`);
        });
}

module.exports = writeToFile;