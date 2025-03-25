# System Design

##  Architecture Overview

The application consists of four main modules:

1. **File Reader Module**  
   - Reads `password.txt`
   - Parses email:password pairs

2. **Hashing Module**  
   - Converts plaintext passwords to hashed values using SHA-256

3. **Database Module**  
   - Uses Mongoose to store email:hash entries into MongoDB

4. **Login Checker**  
   - Verifies login credentials by comparing given email/password to the DB

---

## Flow Summary

1. Read from `password.txt`
2. Hash each password
3. Save as email:hash in `password.enc.txt` and MongoDB
4. Accept login attempts and return `true` or `false` based on match

---


