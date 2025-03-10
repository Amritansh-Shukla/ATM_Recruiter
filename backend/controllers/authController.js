const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const HR = require("../models/Hr");

const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User already exists' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({ name, email, password: hashedPassword, role });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


const hrRegister = async (req, res) => {
    try {
        const { name, email, password} = req.body;

        // Check if HR already exists
        let hr = await HR.findOne({ email });
        if (hr) return res.status(400).json({ message: "HR already exists" });

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create and save new HR
        hr = new HR({ name, email, password: hashedPassword});
        await hr.save();

        res.status(201).json({ message: "HR registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        console.log("hello1");

        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ token });
        console.log("hello");
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};



const loginHR = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if HR exists
        const hr = await HR.findOne({ email });
        if (!hr) return res.status(400).json({ message: "Invalid credentials" });

        // Compare password
        const isMatch = await bcrypt.compare(password, hr.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Generate JWT Token
        const token = jwt.sign({ hrId: hr._id, role: "hr" }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.json({ token, message: "Login successful" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};




module.exports = { registerUser, loginUser , hrRegister , loginHR  };
