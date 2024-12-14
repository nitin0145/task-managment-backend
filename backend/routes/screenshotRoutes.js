const express = require('express');
const { captureScreenshot } = require('../controllers/screenshotController');
const router = express.Router();

router.post('/capture', captureScreenshot);

module.exports = router;
