function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `https://img.shields.io/badge/license-${license}-blue`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return 'license link?'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License

    ${renderLicenseBadge(license)}

    ${renderLicenseLink(license)}
    `;
}

function renderSection(title, description) {
  if (!title || !description) {
    return ''
  }

  return `
  ## ${title}
  
  ${description}
  `;
}

function renderTableofContents() {
  // loop through data and create toc list
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, callback) {
  let md = '';

  for (const [key, value] of Object.entries(data)) {
    md += renderSection(key, value);
  }
  
  callback(md);
}

module.exports = generateMarkdown;
