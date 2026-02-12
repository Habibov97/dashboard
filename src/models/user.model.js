const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      unique: true,
    },
    lastName: {
      type: String,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
    height: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    birthDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
