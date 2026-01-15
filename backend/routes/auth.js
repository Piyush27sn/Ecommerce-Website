const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const router = express.Router();


// REGISTER route
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

        // 5. generate JWT
        const token = jwt.sign(
            { id: newUser._id, email: newUser.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )
        // 6. respond with token + user info
        res.status(201).json({
            token,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
            },
            message: "User registered successfully"
        });

    } catch (err) {
        console.error( "Register error: ", err );
        res.status(500).json({ error: "Server error" });
    }
});


// LOGIN route
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. find user
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "Invalid credentials" });

        // 2. compare password
        const isMatch = await bcrypt.compare( password, user.passwordHash );
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        // 3. generate JWT
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET ,
            { expiresIn: "1d" }
        );

        // 4. respond with token + user info
        res.json(
            {
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
            }
        );
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;