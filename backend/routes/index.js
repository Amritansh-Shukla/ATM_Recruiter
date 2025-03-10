const express = require('express');
const router = express.Router();

router.use('/auth', require('./authRoutes'));
router.use('/jobs', require('./jobRoutes'));

module.exports = router;
