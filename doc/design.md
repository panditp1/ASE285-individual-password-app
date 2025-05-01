# Design Document

## Software Architecture Diagram

```
User Input (CLI args)
       ↓
 ┌───────────────┐
 │ password.txt  │
 └───────────────┘
       ↓ readFile()
 ┌────────────────────┐
 │ makepassword.js     │
 └────────────────────┘
       ↓ hash()
 ┌────────────────────┐
 │ password.enc.txt    │
 └────────────────────┘
       ↓ upload
 ┌────────────────────┐
 │     db.js          │
 └────────────────────┘
       ↓ save to
 ┌──────────────────────────────┐
 │ MongoDB via Mongoose (Atlas) │
 └──────────────────────────────┘
       ↑ query
 ┌────────────────────┐
 │ passwordjs.js      │
 └────────────────────┘
       ↑ input
  User Email + Password
```

## What Each File Does

### `makepassword.js`
- Reads the `password.txt` file
- Hashes each password using SHA-256
- Writes the results to `password.enc.txt`

### `utility.js`
- This file has helper functions;
    - `readFile()`– reads lines from a file
    - `writeFile()` –writes an array to a file
    - `hash()` –hashes strings using SHA-256

### `db.js`
- Connects to MongoDB Atlas using mongoose
- Uploads all the email:hash pairs into the `users` collection
- Deletes old entries before adding new ones(so no duplicates)

### `passwordjs.js`
- Takes in email and password from the command line
- Hashes the password
- Checks the database to see if the credentials match
- Returns `true` or `false`

### `test.js`
- Has basic tests to make sure:
    - Files are being read correctly
    - Passwords are getting hashed
    - Output files are being written properly

## How the Data Flows

1. `makepassword.js` reads the original file and creates the encrypted one
2. `db.js` uploads that encrypted data to MongoDB
3. `passwordjs.js` checks if login credentials are valid by comparing the input with what is in the DB

## Why I Designed It This Way

- Each file does one specific thing so it is easier to keep track of what's going on
- Reused common logic (like hashing) by putting it in `utility.js`
- Used SHA-256 for security so plain-text passwords aren't stored
- Chose MongoDB Atlas so the database is in the cloud and not tied to my local machine
- Added tests to make sure things work and I don’t break anything by accident
