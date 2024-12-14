const Screenshot = require('../models/Screenshot');
const { captureScreenshot } = require('../../utils/screenshotHelper');

// Capture a screenshot
const captureScreenshotController = async (req, res) => {
    try {
        const { taskId } = req.body;

        const filePath = await captureScreenshot();

        const screenshot = new Screenshot({
            taskId,
            filePath,
        });

        await screenshot.save();
        res.status(201).json({ message: 'Screenshot captured', screenshot });
    } catch (error) {
        res.status(500).json({ error: 'Failed to capture screenshot' });
    }
};

module.exports = { captureScreenshot: captureScreenshotController };
