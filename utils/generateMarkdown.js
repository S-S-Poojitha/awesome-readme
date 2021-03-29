const { getLicense } = require('./licenses');
const camelCase = require('./camelCase');

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

  return `[Learn more](${license.link})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseChoice) {
  if (!licenseChoice) {
    return '';
  }

  let license = getLicense(licenseChoice);

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
  let counter = 1;
  // Starts at fourth answer object and iterates through the rest of the answer names
  for (var i = 5; i < contents.length; i++) {
    let [title,] = contents[i];
    // Creates list item with href. Example: 1. Installation
    md += `\n${counter}. [${camelCase(title)}](#${title})`;
    counter++;
  }

  md += `\n${counter}. [Questions](#questions)`;

  return md;
}

function generateMarkdown(answers) {
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

module.exports = generateMarkdown;
