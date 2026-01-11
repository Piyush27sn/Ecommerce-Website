const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// register route
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // 1. check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists"});
        }

        // 2. hash the passoword
        const passwordHash = await bcrypt.hash(password, 10);

        // 3. create new user
        const newUser = new User(
            {
                name,
                email,
                passwordHash,
            }
        );

        // 4. save to DB
        await newUser.save();

        // 5. respond
        res.status(201).json({ message: "User registered successfully" });

    } catch (err) {
        console.error( "Register error: ", err );
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;