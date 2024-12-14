const TimeLog = require('../models/TimeLog');

// Start a timer for a task
const startTimer = async (req, res) => {
    try {
        const { taskId } = req.body;

        const timeLog = new TimeLog({
            taskId,
            startTime: new Date(),
            userId: req.user._id,
        });

        await timeLog.save();
        res.status(201).json({ message: 'Timer started', timeLog });
    } catch (error) {
        res.status(500).json({ error: 'Failed to start timer' });
    }
};

// Stop a timer for a task
const stopTimer = async (req, res) => {
    try {
        const { logId } = req.body;

        const timeLog = await TimeLog.findOne({ _id: logId, userId: req.user._id });
        if (!timeLog) return res.status(404).json({ error: 'Time log not found' });

        timeLog.endTime = new Date();
        timeLog.duration = (timeLog.endTime - timeLog.startTime) / 1000; // Calculate duration in seconds

        await timeLog.save();
        res.status(200).json({ message: 'Timer stopped', timeLog });
    } catch (error) {
        res.status(500).json({ error: 'Failed to stop timer' });
    }
};

module.exports = { startTimer, stopTimer };
