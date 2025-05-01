'use strict'

const mongoose = require('mongoose');
const util = require('./utility'); // for hash()
const fs = require('fs');


const mongoURL = 'mongodb+srv://ase285user:asepass123@cluster0.qu68f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const userSchema = new mongoose.Schema({
    email: String,
    hash: String
});

const User = mongoose.model('User', userSchema);

async function passwordjs() {
    if (process.argv.length !== 5) return 'false';

    const email = process.argv[3];
    const password = process.argv[4];
    const hashed = util.hash(password);

    try{
        await mongoose.connect(mongoURL);
        const found = await User.findOne({ email: email});
        await mongoose.disconnect();

        if (!found) return 'false';
        return found.hash === hashed ? 'true' : 'false';

    } catch (err) {
        console.error('Error:', err);
        return 'false';
    }
}

if (require.main === module) {
    passwordjs().then(console.log);
}

module.exports = { passwordjs };
