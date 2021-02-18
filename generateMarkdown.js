// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# Project Title: ${data.title}
  
### Description: 
${data.description}

[GitHub Link to ${data.username}](http://github.com/${data.username})

- One
- Two
- Three

https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>

![Badge License](https://img.shields.io/badge/License-${data.license}-blue)
`;
}

module.exports = generateMarkdown;
