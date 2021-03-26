const { runPrompt } = require('./utils/inquirer');
const writeToFile = require('./utils/writeToFile');
const generateMarkdown = require('./utils/generateMarkdown');
const FILE_PATH = './outputs/README.md'

function init() {
    runPrompt()
    .then((answers) => generateMarkdown(answers))
    .then((markdown) => writeToFile(FILE_PATH, markdown))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
