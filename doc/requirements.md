# Requirements

## What the App Should Do (Functional)

- As a user, I want the app to read a file(`password.txt`) with emails and passwords so it knows who can log in.
- As a developer, I want to hash the passwords using SHA-256 so they are not stored as plain text.
- As the system, I want to store email and hashed password pairs in MongoDB so the data is saved safely.
- As a user, I want to log in with my email and password and get `true` if it is correct and `false` if it is wrong, missing or empty.

## What Else It Should Handle (Non-Functional)

- As a user, if the input file is missing or broken, I want the app to show a helpful message instead of crashing.
- As a developer, I want to use SHA-256 to hash passwords securely.
- As a developer, I want to use MongoDB with Mongoose so it is easier to connect to the database and work with user data.
