# ASE285 Project – Encrypted Login System

**Name:** Priyanka  
**Course:** ASE 285 at NKU  
**Project:** HW6 – Encrypted Login System

---

## What This Project Does

This project takes a list of emails and passwords, hashes the passwords, saves them in a MongoDB database, and lets you check if login info is correct. It's made using Node.js and follows what we learned in ASE 285.

---

##  Tools I Used

- Node.js
- MongoDB Atlas (cloud database)
- Mongoose (makes MongoDB easier)
- WebStorm
- Git & GitHub

---

## Weekly Plan

| Week   | What I Did                                |
|--------|--------------------------------------------|
| Week 1 | Wrote down requirements + made a diagram   |
| Week 2 | Coded the file reading + hashing part      |
| Week 3 | Connected to MongoDB and uploaded data     |
| Week 4 | Wrote the login checker + tested it        |
| Week 5 | Made user manual + added acceptance test   |
| Week 6 | Cleaned everything up and submitted        |

---

##  How to Run This

1. Clone the project:

```bash
git clone https://github.com/panditp1/ASE285-individual-password-app
cd ASE285-individual-password-app
```

2. Install everything:

```bash
npm install
```

3. Make sure you have a file at `data/password.txt` with stuff like:

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

Just do this:

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

This means it works correctly for good and bad logins.

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

I followed the instructions and did the project on my own. Everything works, and I tested it using the example cases. I'm happy with how it turned out!
