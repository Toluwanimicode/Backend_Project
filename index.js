const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Admission = require('./models/admissions.js');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB using the connection string from environment variables
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");

    // Apply CORS middleware
    app.use(cors());
    app.use(express.json());

    // Define route to handle form submissions
    app.post('/api/admissions', async (req, res) => {
      try {
        console.log('Form submission received:', req.body);

        // Process the form submission
        const newAdmission = new Admission(req.body);
        await newAdmission.save();

        res.status(201).json({ message: 'Form submitted successfully!' });
      } catch (error) {
        console.error('Error processing form submission:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    });

    // Default route
    app.get('/', (req, res) => {
      res.send('Hello, World!');
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

