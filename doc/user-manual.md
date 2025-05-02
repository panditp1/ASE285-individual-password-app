# User Manual

## Overview

This app reads a list of email and password pairs, hashes the passwords (so we’re not storing them as plain text), saves them in a MongoDB database, and lets you check if someone’s login info is right or not.

---

## Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/panditp1/ASE285-individual-password-app
cd ASE285-individual-password-app
```

### 2. Install what you need

```bash
npm install
```

### 3. Add your input file

Make sure there is a file called `password.txt` inside the `data/` folder and it looks like this:

```
someone@example.com:password123
another@email.com:mysecurepass
```

---

## Run the app

To hash the passwords and upload them to the database:

```bash
node src/makepassword.js
node src/db.js
```

---

## Try checking a login

Run this command with any email/password pair:

```bash
node src/passwordjs.js data/password.txt someone@example.com password123
```

It will return `true` or `false` depending on whether it matches what is in the database.

---

## Testing

### Unit tests

There are tests for:
- reading the file
- hashing passwords
- writing to the output file

### Acceptance test

To check if everything’s working like it should:

```bash
sh acceptance.bat
```

You should see something like:

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

---

## Example Output

After running the hashing part, your `password.enc.txt` might look like:

```
someone@example.com:8d969eef6ecad3c29a3a629280e686cf...
```

---

## If Something Breaks...

- Double check if your MongoDB is connected (locally or via atlas)
- Make sure `password.txt` is formatted properly..(no spaces, one pair per line)
- If you’re using a `.env` file, make sure the MongoDB URI is correct

Hope that helps...!
