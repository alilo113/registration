const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
    unique: true // Assuming usernames should be unique
  },
  Password: {
    type: String,
    required: true,
    minlength: 8 // Minimum password length
  },
  Email: {
    type: String,
    required: true,
    unique: true // Assuming emails should be unique
  }
});

// Hashing the password before saving to the database
userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('Password')) {
      return next();
    }
    const hashedPassword = await bcrypt.hash(this.Password, 10); // Hashing with a salt factor of 10
    this.Password = hashedPassword;
    return next();
  } catch (error) {
    return next(error);
  }
});

// Method to compare passwords for login/authentication
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.Password);
  } catch (error) {
    return false;
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;