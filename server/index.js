require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth.js"); // Import your authentication routes
const protectedRoutes = require("./routes/protectedRoutes.js");

const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api", protectedRoutes); // Protected routes

const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
  console.log("Server is running on port 3001");
});
