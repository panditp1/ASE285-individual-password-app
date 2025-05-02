'use strict';

const fs = require('fs');
const path = require('path');
const { readFile, writeFile, hash } = require('./utility');

describe("Unit tests for utility functions", () =>
{

    test("readFile should return an array of lines", () => {
        const lines = readFile(path.join(__dirname, '../data/password.txt'));
        expect(Array.isArray(lines)).toBe(true);
        expect(lines.length).toBeGreaterThan(0);
    });

    test("hash should return a 64-character SHA-256 hash", () => {
        const result = hash("123456");
        expect(typeof result).toBe("string");
        expect(result.length).toBe(64);
    });

    test("writeFile should write correct data", () => {
        const testPath = path.join(__dirname, '../data/test-output.txt');
        const data =['test@example.com:dummypassword'];

        writeFile(data, testPath);
        const written = fs.readFileSync(testPath, 'utf-8').trim();
        expect(written).toBe(data[0]);
        fs.unlinkSync(testPath);

        });
});
