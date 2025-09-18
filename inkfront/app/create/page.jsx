"use client";
import React, { useState } from "react";

function BlogForm() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("author", author);
      formData.append("title", title);
      formData.append("content", content);
      if (image) formData.append("image", image);

      const response = await fetch("http://localhost:5000/api/blogs/create", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("✅ Blog published successfully!");
        setAuthor("");
        setTitle("");
        setContent("");
        setImage(null);
      } else {
        const errorData = await response.json();
        setMessage(`❌ Failed to publish: ${errorData.message || "Server error"}`);
      }
    } catch (err) {
      setMessage("❌ Error submitting blog. Check console.");
      console.error("Blog post error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black text-white p-6 rounded-lg shadow-md space-y-4 max-w-xl mx-auto"
    >
      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 text-white bg-transparent"
        required
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 text-white bg-transparent"
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 h-40 text-white bg-transparent"
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="w-full border border-gray-300 rounded px-3 py-2 text-white file:text-white file:bg-blue-600 file:border-none file:px-4 file:py-2 file:rounded bg-transparent"
      />
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Publishing..." : "Publish your Blog"}
      </button>
      {message && <p className="text-center text-sm mt-2">{message}</p>}
    </form>
  );
}

export default BlogForm;
