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
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/blogs/readall`);
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
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/blogs/${blogId}/like`, {
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

// const handleFollow = async (authorId) => {
//   const followerId =  localStorage.getItem("userId"); // 👈 Replace with logged-in user's ID

//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}users/${authorId}/follow`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ followerId }),
//     });

//     const data = await res.json();
//     console.log("Follow response:", data);
//   } catch (err) {
//     console.error("Failed to follow author", err.message);
//   }
// };
  const handleDelete = async (blogId) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_CREATE}api/blogs/remove/${blogId}`, {
        method: "DELETE",
      });
      setBlogs((prev) => prev.filter((blog) => blog._id !== blogId));
    } catch (err) {
      console.error("Failed to delete blog", err);
    }
  };
//get by id for update 
  const handleUpdate = async (blogId) => {// dikkat
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/blogs/${blogId}`);
    if (!res.ok) throw new Error("Failed to fetch blog");
    console.log("dabgya")

    const blogData = await res.json();

    // Optionally store in localStorage or context
    localStorage.setItem("selectedBlog", JSON.stringify(blogData));

    router.push(`/read/${blogId}`);
  } catch (err) {
    console.error("Error fetching blog:", err);
    alert("Blog not found or server error.");
  }
};

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

                <button onClick={()=>handleUpdate(blog._id)} className="flex items-center gap-1 hover:text-yellow-500">
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
