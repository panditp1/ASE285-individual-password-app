##  Final Markdown Text for `user-manual.md`

#  User Manual

##  Overview

This app reads a file with `email:password` pairs, encrypts the passwords, stores them in a MongoDB database, and checks login attempts for validity.

---

##  Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/ASE285-individual-password-app
cd ASE285-individual-password-app


### 2. Install Dependencies

```bash
npm install
```

### 3. Prepare Input File

Make sure you have a `password.txt` file in the root of the project directory, formatted like this:

```
someone@example.com:password123
another@email.com:mysecurepass
```

---

## ▶ Run the App

```bash
node index.js
```

This will:
- Read `password.txt`
- Generate a hashed `password.enc.txt`
- Upload the data to MongoDB

---

## Check Login Function

You can use this inside your app:

```js
checkLogin('someone@example.com', 'password123'); // Returns true or false
```

---

##  Testing

The project includes:
- Unit tests for file reading, hashing, and DB functions
- Acceptance test file to simulate login attempts

Run the tests using:

```bash
npm test
```

Or, if using the provided batch script:

```bash
sh acceptance.bat
```

---

## Output Example

Generated `password.enc.txt`:

```
someone@example.com:a6c2353c6b7e9e29f8d6bba5b1cf1234abcd5678...
```

---

## Troubleshooting

- Make sure MongoDB is running locally or connected via MongoDB Atlas
- Check that `password.txt` is properly formatted (one entry per line, no spaces)
- If using environment variables, ensure `.env` file is correctly set up with your MongoDB URI

```

---
