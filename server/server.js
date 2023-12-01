const express = require('express');
const app = express();
const mongoose = require("mongoose");
const user = require("./models/userSchema");

mongoose.connect('mongodb://localhost:27017/users')
  .then(() => {
    console.log("Connected to mongo database");
  }).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

  app.post("/api/users", async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const newUser = new user({ Username: username, Email: email, Password: password });
      await newUser.save();
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Error creating user', message: error.message });
    }
  });  

app.get('/api/users', async (req, res) => {
  try {
    const users = await user.find(); // Change User.find() to user.find()
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users', message: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});