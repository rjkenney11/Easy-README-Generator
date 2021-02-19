function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  
### Description: 
${data.description}

### Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Screenshot](#screenshot)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [License](#license)

### Installation:
${data.installation}

### Usage:
${data.usage}

### Screenshot:
![Image](${data.screenshot})
<br />
<br />
GitHib Link: ${data.repo} <br /><br />

### Contributing:
${data.contributing}<br />
<br />
GitHub: [${data.username}](http://github.com/${data.username})<br /><br />

### Questions:
${data.questions}<br />
<br />
Email me: ${data.email}<br />
<br />

### License:
![badge](https://img.shields.io/badge/license-${data.license}-blue)
<br />
This application is covered by ${data.license}. 

`;
}

module.exports = generateMarkdown;
