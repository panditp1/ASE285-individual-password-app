'use strict'
const {readFile, writeFile, hash} = require('./utility')

function makepassword(passwordFileName, passwordEncFileName) {
    const lines = readFile(passwordFileName);
    const encryptedLines = [];

    for (let line of lines)
    {
        if (line.trim() === '') continue;
        const [email, password] =line.split(':');
        const hashedPassword= hash(password);
        encryptedLines.push(`${email}:${hashedPassword}`);

       } writeFile(encryptedLines,passwordEncFileName);
}

if (require.main === module)

{
    makepassword('./password.txt','./password.enc.txt')
} module.exports = { makepassword };
