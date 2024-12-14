const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');

const authRoutes = require('./backend/routes/authRoutes');
const projectRoutes = require('./backend/routes/projectRoutes');
const taskRoutes = require('./backend/routes/taskRoutes');
const timeLogRoutes = require('./backend/routes/timeLogRoutes');
const screenshotRoutes = require('./backend/routes/screenshotRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/time-logs', timeLogRoutes);
app.use('/api/screenshots', screenshotRoutes);

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;
