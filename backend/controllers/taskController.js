const Task = require('../models/Task');

const createTask = async (req, res) => {
    try {
        const { name, description, priority, dueDate, projectId } = req.body;
        const task = new Task({ name, description, priority, dueDate, projectId });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: 'Error creating task' });
    }
};

const getTasks = async (req, res) => {
    try {
        const { projectId } = req.params;
        const tasks = await Task.find({ projectId });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching tasks' });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting task' });
    }
};

module.exports = { createTask, getTasks, deleteTask };
