const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth"); // your login/register routes
const blogRoutes = require("./routes/blogRoutes"); // your blog routes

dotenv.config();
const app = express();

console.log("🔥 server.js loaded");
console.log("🔑 Mongo URI:", process.env.MONGO_URL);

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // frontend origin
  credentials: true,
}));
app.use(express.json());
app.use("/uploads", express.static("uploads")); // to serve uploaded files

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

// MongoDB connection and server start
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running at http://localhost:${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed: ", err);
  });
