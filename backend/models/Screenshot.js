const mongoose = require('mongoose');

const screenshotSchema = new mongoose.Schema({
    taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
    filePath: { type: String, required: true },
    captureTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Screenshot', screenshotSchema);
