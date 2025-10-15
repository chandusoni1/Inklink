"use client";
import React from "react";
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#262626] text-white px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Logo + Slogan */}
        <Link href="/">
  <div className="cursor-pointer">
    <h1 className="text-4xl font-extrabold">INKLINK</h1>
    <p className="mt-2 text-sm italic">Your Voice. Your Space.</p>
  </div>
</Link>

        {/* Center: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/blog" className="hover:underline">Blogs</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Right: Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
          <p className="text-sm mb-3">
            Join our newsletter to stay updated with blog posts, ideas, and stories.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md text-white++ w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-10 border-t border-black pt-6 text-center">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center gap-6 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
