const fs = require('fs');
const path = require('path');

// Read the original script file
const scriptFilePath = path.join(__dirname, 'script.js');
let scriptContent = fs.readFileSync(scriptFilePath, 'utf8');

// Inject process.env variables
scriptContent = scriptContent.replace(
    /process\.env\.([A-Z0-9_]+)/g,
    (_, variable) => `'${process.env[variable] || ''}'`
);

// Write the modified script file
fs.writeFileSync(scriptFilePath, scriptContent, 'utf8');