const express = require('express');
const { startTimer, stopTimer } = require('../controllers/timeLogController');
const router = express.Router();

router.post('/start', startTimer);
router.post('/stop', stopTimer);

module.exports = router;
