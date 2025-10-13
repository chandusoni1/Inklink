"use client";

import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaComment,
  FaShareAlt,
  FaUserPlus,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Link } from "next/link";

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_READALL);
      const data = await res.json();
      setBlogs(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to load blogs");
      setLoading(false);
    }
  };

  const handleLike = async (blogId) => {
    try {
      await fetch(process.env.NEXT_PUBLIC_LIKE, {
        method: "POST",
      });
      console.log("Liked blog:", blogId);
    } catch (err) {
      console.error("Failed to like blog", err);
    }
  };

  const handleComment = (blogId) => {
    console.log("Comment on blog:", blogId);
    // Implement modal or redirect
  };

  const handleShare = (blogId) => {
    const blogURL = `${window.location.origin}/blog/${blogId}`;
    navigator.clipboard.writeText(blogURL);
    alert("Blog link copied to clipboard!");
  };

  const handleFollow = async (authorId) => {
    try {
      await fetch(process.env.NEXT_PUBLIC_FOLLOW, {
        method: "POST",
      });
      console.log("Followed author:", authorId);
    } catch (err) {
      console.error("Failed to follow author", err);
    }
  };

  const handleDelete = async (blogId) => {
    try {
      await fetch(process.env.NEXT_PUBLIC_DELETE, {
        method: "DELETE",
      });
      setBlogs((prev) => prev.filter((blog) => blog._id !== blogId));
    } catch (err) {
      console.error("Failed to delete blog", err);
    }
  };

  const handleUpdate = (blogId) => {
    router.push(`/read/${blogId}`);
  };

  if (loading) return <p className="text-center">Loading blogs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto text-black">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">
        Posted Blogs
      </h1>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs posted yet.</p>
      ) : (
        <div className="space-y-8">
          {blogs.map((blog, index) => (
            <div
              key={blog._id || index}
              className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4">{blog.content}</p>

              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <button
                  onClick={() => handleLike(blog._id)}
                  className="flex items-center gap-1 hover:text-red-500"
                >
                  <FaHeart /> Like
                </button>

                <button
                  onClick={() => handleComment(blog._id)}
                  className="flex items-center gap-1 hover:text-blue-500"
                >
                  <FaComment /> Comment
                </button>

                <button
                  onClick={() => handleShare(blog._id)}
                  className="flex items-center gap-1 hover:text-green-500"
                >
                  <FaShareAlt /> Share
                </button>

                <button
                  onClick={() => handleFollow(blog.author?._id)}
                  className="flex items-center gap-1 hover:text-indigo-500"
                >
                  <FaUserPlus /> Follow
                </button>

                <button className="flex items-center gap-1 hover:text-yellow-500">
                  <FaEdit /> Update
                </button>

                <button
                  onClick={() => handleDelete(blog._id)}
                  className="flex items-center gap-1 hover:text-red-700"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
