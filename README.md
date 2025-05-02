# ASE285 Project- Encrypted Login System

**Name:** Priyanka Pandit
**Course:** ASE 285 at NKU  
**Project:** HW6 – Encrypted Login System

---

## What This Project Does

This project takes a list of emails and passwords, hashes the passwords, saves them in a MongoDB database, and lets you check if login info is correct. It's made using Node.js and follows what we learned in ASE 285.

---

## Tools I Used

- Node.js
- MongoDB Atlas (cloud database)
- Mongoose (makes MongoDB easier)
- WebStorm
- Git & GitHub

---

## What I Did by Day

### Day 1 – Planning
- Read the assignment
- Looked over the template files
- Wrote down what the app should do
- Sketched out the folder structure

### Day 2 – File Handling & Hashing
- Coded file reading from `password.txt`
- Implemented SHA-256 hashing
- Wrote output to `password.enc.txt`

### Day 3 – MongoDB Integration
- Set up MongoDB Atlas and Mongoose
- Connected the app to MongoDB
- Uploaded email:hash data to the database

### Day 4 – Login Checker
- Built `passwordjs.js` to check logins
- Tested different true/false scenarios
- Made sure invalid logins return `false`

### Day 5 – Testing & Cleanup
- Wrote `test.js` for unit testing
- Ran and passed the acceptance test
- Cleaned up files and deleted `.idea/`,`node_modules/`
- Finalized `README.md` and docs

---

## How to Run This

1. Clone the project:

```bash
git clone https://github.com/panditp1/ASE285-individual-password-app
cd ASE285-individual-password-app
```

2. Install everything:

```bash
npm install
```

3. Make sure you have a file at `data/password.txt` with content like:

```
sm.cho@hello.com:123456
john.deacon@good.com:bestpassword
```

4. Run this to hash the passwords and upload them to MongoDB:

```bash
node src/makepassword.js
node src/db.js
```

5. You can test a login like this:

```bash
node src/passwordjs.js data/password.txt sm.cho@hello.com 123456
```

---

## To Run the Acceptance Test

Run this:

```bash
sh acceptance.bat
```

You should see:

```
true
true
true
true
false
false
false
false
```

This confirms it handles all correct and incorrect login scenarios.

---

## What's In Here

```
/data
  ├── password.txt
  └── password.enc.txt

/src
  ├── makepassword.js
  ├── db.js
  ├── passwordjs.js
  ├── test.js
  └── utility.js

/doc
  ├── requirements.md
  ├── design.md
  └── user-manual.md

acceptance.bat
README.md
```

---

## Final Notes

I followed the instructions and did the project on my own. Everything works and I tested it using the example cases. I am happy with how it turned out.
