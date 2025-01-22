require('dotenv').config();
const express = require('express');
const stakingRoutes = require('./routes/staking');

const app = express();
app.use(express.json());

// API Routes
app.use('/api/staking', stakingRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`NuroAI Staking Backend running on port ${PORT}`);
});