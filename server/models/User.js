const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const moment = require("moment-timezone");
const { Schema } = mongoose;

// Define User Schema with automatic timestamps
const userSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

// Convert current time to local timezone (Asia/Manila)
function getCurrentLocalTime() {
  return moment().tz("Asia/Manila").toDate();
}

// Middleware to set the correct timestamps before saving
userSchema.pre("save", function (next) {
  const now = getCurrentLocalTime();
  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

// Hash the password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcryptjs.compare(candidatePassword, this.password);
};

// Create a function to return user data with local timestamps
userSchema.methods.getUserData = function () {
  return {
    fullName: this.fullName,
    email: this.email,
    password: this.password,
    createdAt: convertToLocalTimezone(this.createdAt),
    updatedAt: convertToLocalTimezone(this.updatedAt),
  };
};

module.exports = mongoose.model("User", userSchema);
