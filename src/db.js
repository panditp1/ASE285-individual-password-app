'use strict';

const fs = require('fs');
const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://ase285user:asepass123@cluster0.qu68f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


mongoose.connect(mongoURL)
    .then(() => console.log(' Connected to MongoDB Atlas'))
    .catch(err => console.error(' MongoDB connection error:', err));


const userSchema =new mongoose.Schema({
    email: String,
    hash: String
});

const User = mongoose.model('User', userSchema);


function uploadData() {
    const lines = fs.readFileSync('password.enc.txt','utf-8').split('\n');

    const users = lines.map(line => {
        const [email, hash] = line.split(':');
        return { email, hash };
    });


    User.deleteMany({})
        .then(() =>
        {
            return User.insertMany(users);
        })
        .then(() =>
        {
            console.log('All users inserted after cleanup!');
            mongoose.disconnect();
        })
        .catch(err =>
        {
            console.error('Insert error:',err);
            mongoose.disconnect();
        });
}

uploadData();
