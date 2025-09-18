const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
// const path = require("path"); 
const multer = require("multer");
const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client("");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Get all blog posts
router.get("/readall", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});
// get by id
router.get("/read/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog)


  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/// Blog create route
router.post("/create", upload.single("image"), async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);

    const { title, author, content } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newBlog = new Blog({
      title,
      author,
      content,
      imageUrl,
    });

    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully!" });
  } catch (error) {
    console.error("Error creating blog:", error.message);
    res.status(500).json({ message: "Server error: " + error.message });
  }
});
// Delete a blog post by ID
router.delete("/remove/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

router.post("/google", async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "",
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    // 🧠 Check if user exists in DB, if not create new
    // Example:
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email, name, picture });
    }

    // 🔑 Generate your own app token (JWT for session/auth)
    const jwtToken = generateYourJWT(user); // use your logic

    res.json({ token: jwtToken, user });
  } catch (error) {
    console.error("Google Auth Error:", error);
    res.status(401).json({ message: "Invalid Google token" });
  }
});

module.exports = router;





