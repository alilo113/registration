const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require('./models/userSchema');

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/usersDatabase')
  .then(() => {
    console.log('Connected to mongo database');
    // Your code for database operations goes here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Middleware to handle CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Set the allowed origin (* for all)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.post('/api/users', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Perform data validation checks here if necessary
    const newUser = new user({ Username: username, Email: email, Password: password });
    console.log(newUser)
    const savedUser = await newUser.save();
  } catch (error) {
    console.error('Error creating user:', error);
  }
});  

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await user.findOne({ Username: username, Password: password });

    if (existingUser) {
      res.status(200).send('Login successful!');
    } else {
      res.status(401).send('Invalid username or password.');
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('An error occurred during login.');
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});