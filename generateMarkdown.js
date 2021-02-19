function generateMarkdown(data) {
  console.log(data);
  return `# Project Title: ${data.title}
  
### Description: 
${data.description}
Check it out here: 

### Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

### Installation:
${data.installation}

### Usage:
${data.usage}

### Contributing:
${data.contributing}<br />
<br />
GitHub: [GitHub Link to ${data.username}](http://github.com/${data.username})<br /><br />

### Tests:
${data.tests}

### Questions:
${data.questions}<br />
<br />
Email me: ${data.email}<br />
<br />
GitHub Repo: [GitHub Link to ${data.repo}]<br /><br />

### License:
![Badge License](https://img.shields.io/badge/License-${data.license}-blue)
<br />
This application is covered by ${data.license}.
`;
}

module.exports = generateMarkdown;
