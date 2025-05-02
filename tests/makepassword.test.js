const fs = require('fs');
const path = require('path');
const u = require('../src/utility');
const p = require('../src/makepassword');

describe("makepassword creates correct output file", () => {
    const inputPath = path.join(__dirname, 'passwordtest.txt');
    const outputPath = path.join(__dirname, 'passwordtest.enc.txt');

    beforeAll(() => {
        if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
    });

    test("Output file is created with correct hashed content", () => {

        p.makepassword(inputPath, outputPath);

        expect(fs.existsSync(outputPath)).toBe(true);


        const lines = fs.readFileSync(outputPath, 'utf-8').trim().split('\n');
        expect(lines.length).toBe(1);
        const [email, hash] = lines[0].split(':');
        expect(email).toBe('sm.cho@hello.com');
        expect(hash.length).toBe(64);
    });
});
