const fs = require('fs');
const path = require('path');

// Read the original script file
const scriptFilePath = path.join(__dirname, 'script.js');
let scriptContent = fs.readFileSync(scriptFilePath, 'utf8');

// Define environment variables object
const envVariables = {
    APIKEY: process.env.APIKEY || '',
    AUTHDOMAIN: process.env.AUTHDOMAIN || '',
    DATABASEURL: process.env.DATABASEURL || '',
    PROJECTID: process.env.PROJECTID || '',
    STORAGEBUCKET: process.env.STORAGEBUCKET || '',
    MESSAGINGSENDERID: process.env.MESSAGINGSENDERID || '',
    APPID: process.env.APPID || '',
    MEASUREMENTID: process.env.MEASUREMENTID || ''
};

// Inject environment variables
Object.keys(envVariables).forEach(key => {
    const regex = new RegExp(`process\\.env\\.${key}`, 'g');
    scriptContent = scriptContent.replace(regex, `'${envVariables[key]}'`);
});

// Write the modified script file
fs.writeFileSync(scriptFilePath, scriptContent, 'utf8');
