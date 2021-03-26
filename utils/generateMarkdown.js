const { licenses } = require('./inquirer');

function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `https://img.shields.io/badge/license-${license.linkName}-blue`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `[Read more](${license.link})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseChoice) {
  if (!licenseChoice) {
    return '';
  }

  let license = licenses.find(license => license.name === licenseChoice);

  return `## License

  ${renderLicenseBadge(license)} ${renderLicenseLink(license)}
  `;
}

function renderSection(title, description) {
  if (!title || !description) {
    return ''
  }

  return `## [${title}](#${title})
  
  ${description}

  `;
}

function renderTableofContents(answers) {
  let contents = Object.entries(answers);
  let md = `## Table of Contents\n`;
  let startNum = 1;
  // Start at fourth answer object
  for (var i = 4; i < contents.length; i++) {
    let [title,] = contents[i];
    md += `\n${startNum}. [${title}](#${title})`;
    startNum++;
  }

  return md;
}

function renderMarkdownTemplate(answers) {
  return `# ${answers.title}

${answers.description}

${renderLicenseSection(answers.license)}
  
${renderTableofContents(answers)}
  
## Installation
  
${answers.installation}
  
## Usage
  
${answers.usage}
  
## Contributing
  
${answers.contributing}
  
## Tests
  
${answers.tests}
  
## Questions
  
You can find me on [GitHub](https://github.com/${answers.username}) or, email me at ${answers.email}.
  
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return new Promise((resolve, reject) => {
    if (!answers) {
      reject(new Error('Answers are missing.'))
    } else {
      resolve(renderMarkdownTemplate(answers));
    }
  });
}

module.exports = generateMarkdown;
