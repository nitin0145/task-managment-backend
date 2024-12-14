const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { createProject, getProjects, deleteProject } = require('../controllers/projectController');
const router = express.Router();

router.post('/', authMiddleware, createProject);
router.get('/', authMiddleware, getProjects);
router.delete('/:id', authMiddleware, deleteProject);

module.exports = router;
