# Requirements

## Functional Requirements
- Encrypt passwords from a file (password.txt)
- Store email:hashed-password pairs into MongoDB
- Return `true` if given login credentials are valid
- Return `false` for wrong password, unknown email, or empty input

## Non-Functional Requirements
- System should handle file read/write errors gracefully
- Passwords must be hashed using SHA-256 (or a similar secure algorithm)
- MongoDB should be used with Mongoose for data modeling
