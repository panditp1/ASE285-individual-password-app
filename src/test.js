'use strict';

const fs = require('fs');
const assert = require('assert');
const { readFile, writeFile, hash } =require('./utility.js');

function testReadFile() {
    const lines = readFile('data/password.txt');
    assert(Array.isArray(lines), 'Should return an array');
    assert(lines.length > 0, 'Should not be empty');
    console.log('testReadFile passed');
}

function testHash() {
    const plain = '123456';
    const hashed = hash(plain);
    assert.strictEqual(typeof hashed, 'string', 'Hash should be a string');
    assert.strictEqual(hashed.length, 64, 'SHA-256 hash should be 64 characters');
    console.log('testHash passed');
}

function testWriteFile() {
    const data = ['test@example.com:dummypassword'];
    writeFile(data, 'data/test-output.txt');
    const fileExists = fs.existsSync('data/test-output.txt');
    assert(fileExists, 'Output file should exist');
    const content = fs.readFileSync('data/test-output.txt', 'utf-8').trim();
    assert.strictEqual(content, data[0], 'Written content should match input');
    fs.unlinkSync('data/test-output.txt'); // cleanup
    console.log('testWriteFile passed');
}

testReadFile();
testHash();
testWriteFile();
