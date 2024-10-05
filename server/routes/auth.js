const express = require('express');
const User = require('../models/User');
const { generateToken } = require('../utils/auth');
const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const newUser = new User({ fullName, email, password });
    await newUser.save();
    const token = generateToken(newUser);
    res.status(201).json({ token, user: { id: newUser._id, email: newUser.email } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = generateToken(user);
    res.json({ token, user: { id: user._id, email: user.email } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
