const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authMiddleware = require("./middleware/authMiddleware");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", require("./routes/authRoutes"));

// Protected route
app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Profile data",
    user: req.user
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});