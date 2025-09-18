"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // added

  useEffect(() => {
    // Avoid hydration error by only rendering after client has mounted
    setHasMounted(true);

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.name) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setUser(null);
    setShowMenu(false);
  };

  if (!hasMounted) return null; // Prevent mismatched HTML during SSR

  return (
    <header className="w-full bg-[#1e1e1e] flex items-center justify-between px-6 py-4 shadow-md">
      {/* Logo & Slogan */}
      <Link href="/" className="flex flex-col leading-tight">
        <h1 className="text-2xl font-extrabold text-white tracking-wide">INKLINK</h1>
        <p className="text-sm text-gray-300 -mt-1">Your Voice. Your Space.</p>
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-6 text-base font-medium text-white">
        <Link href="/" className="hover:text-indigo-500 transition-all">Home</Link>
        <Link href="/about" className="hover:text-indigo-500 transition-all">About</Link>
        <Link href="/contact" className="hover:text-indigo-500 transition-all">Contact</Link>
        <Link href="/blog" className="hover:text-indigo-500 transition-all">Blogs</Link>
      </nav>

      {/* Sign In or Profile */}
      {user ? (
        <div className="relative">
          <div
            title={user.name}
            onClick={() => setShowMenu((prev) => !prev)}
            className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold cursor-pointer hover:scale-105 transition-all select-none"
          >
            {user.name.charAt(0).toUpperCase()}
          </div>

          {showMenu && (
            <div className="absolute top-12 right-0 bg-white text-black rounded shadow-md py-2 px-4 text-sm font-medium z-50">
              <p className="mb-2">{user.name}</p>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:underline"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link href="/signup">
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 hover:scale-105 transition-all duration-300 ease-in-out">
            Sign In
          </button>
        </Link>
      )}
    </header>
  );
};

export default Header;
