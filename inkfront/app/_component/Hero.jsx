"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Avoid hydration mismatch

  return (
    <div className="relative bg-gradient-to-br from-indigo-100 via-white to-indigo-200 min-h-[90vh] flex items-center justify-center px-4">
      {/* Decorative Gradient Circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 opacity-30 rounded-full blur-3xl animate-pulse" />

      {/* Main Section Content */}
      <motion.section
        className="text-center max-w-3xl mx-auto mb-12 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-indigo-600 drop-shadow-lg">
          Welcome to <span className="text-blue-700">InkLink</span>
        </h1>
        <p className="text-gray-700 text-xl mb-8">
          InkLink is a beautiful place to express your emotions, thoughts, and
          stories. Read, write, and connect with souls who feel just like you.
        </p>
        <Link href="/create">
          <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition transform hover:scale-105 cursor-pointer">
            Create a Blog
          </span>
        </Link>
      </motion.section>
    </div>
  );
}
