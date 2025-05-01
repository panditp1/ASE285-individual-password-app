# Requirements

## What the App Should Do (Functional)

- Read a file(`password.txt`) that has email and password pairs
- Hash the passwords so we are not saving them as plain text
- Save the email and hashed password into a MongoDB database
- When someone tries to log in:
    - Return `true` if the email and password match what is in the database
    - Return `false` if the password is wrong, the email does not exist or the input is empty

## Other Things It Should Handle (Non-Functional)

- If the input file is missing or broken, the app should not crash, it should show a helpful message
- Passwords must be hashed securely using SHA-256
- We are using MongoDB and Mongoose so it is easier to manage data and connect to the database
