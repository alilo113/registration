const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Username: String,
    Password: String, // Assuming Password is a string; use String for text-based passwords
    Email: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;