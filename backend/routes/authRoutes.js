const express = require('express');
const router = express.Router();
const { registerUser, loginUser, hrRegister, loginHR } = require('../controllers/authController');
const Job = require('../models/Job');




router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/hr-register', hrRegister);  
router.post('/hr-login',loginHR);

module.exports = router;
