const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { createTask, getTasks, deleteTask } = require('../controllers/taskController');
const router = express.Router();

router.post('/', authMiddleware, createTask);
router.get('/:projectId', authMiddleware, getTasks);
router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;
