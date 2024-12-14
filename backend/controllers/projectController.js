const Project = require('../models/Project');

// Create a new project
const createProject = async (req, res) => {
    try {
        const { name, description } = req.body;

        const project = new Project({
            name,
            description,
            userId: req.user._id,
        });

        await project.save();
        res.status(201).json({ message: 'Project created successfully', project });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create project' });
    }
};

// Get all projects for a user
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({ userId: req.user._id });
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
};

// Delete a project
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;

        const project = await Project.findOneAndDelete({ _id: id, userId: req.user._id });
        if (!project) return res.status(404).json({ error: 'Project not found' });

        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete project' });
    }
};

module.exports = { createProject, getProjects, deleteProject };
