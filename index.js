const runPrompt = require('./utils/prompts');
const writeToFile = require('./utils/writeToFile');

function init() {
    runPrompt()
    .then((answers) => writeToFile(answers))
    .catch((err) => console.log(err));
}

init();
