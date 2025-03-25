//This is not a running code since I havenot started working on my project, so this is just a general js code.



const fs = require('fs');
const crypto = require('crypto');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/inventory_login', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const User = mongoose.model('User', {
  email: String,
  passwordHash: String
});

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

const inputFile = 'password.txt';
const outputFile = 'password.enc.txt';


