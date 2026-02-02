    // index.js
    const express = require('express');
    const mongoose = require('mongoose');
    const dotenv = require('dotenv');
    const app = express();
    dotenv.config();
    
    mongoose.connect(process.env.MONGODB_URI)
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error('MongoDB connection error:', err));
    
    app.use(express.json());
    
    // Define routes (example)
    app.get('/api/hello', (req, res) => {
      res.send('Hello from Express!');
    });
    
    // Start the server (for local testing)
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    
    module.exports = app;