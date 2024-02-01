const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Admission = require('./models/admissions.js');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect("mongodb+srv://DAT:Tolu1329@cluster0.oetks32.mongodb.net/admissioncollection?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to the database");

    // Apply CORS middleware
    app.use(cors());
    app.use(express.json());

    // Define route to handle form submissions
    app.post('/api/admissions', async (req, res) => {
        try {
          console.log('Form submission received:', req.body);
      
          // ... (rest of your code)
      
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
