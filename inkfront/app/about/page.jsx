"use client";
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fff4f4] text-gray-800">
      {/* Hero Section - Fully Centered */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-400 text-white px-6 min-h-[60vh] flex items-center justify-center">
  <div className="text-center max-w-4xl">
    <h1 className="text-5xl font-extrabold mb-4 leading-tight">
      Where Words Build Worlds
    </h1>
    <p className="text-2xl font-medium">
      Welcome to InkLink – Your Creative Blogging Universe
    </p>
  </div>
</section>


      {/* Our Story */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Our Story</h2>
        <div className="text-left space-y-4">
          <p>
            InkLink was created by a group of young dreamers who believed every voice matters. We started with a simple idea: give people a space to express, connect, and grow. Whether you’re a poet, coder, student, or entrepreneur — InkLink is your digital notebook and community.
          </p>
          <p>
            In 2025, we launched as a basic blog platform. Today, we’re a growing space for vibrant content, writers’ communities, and real-time interaction. From the streets of small towns to global creators — InkLink is for all.
          </p>
        </div>
      </section>

      {/* What We Believe */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">What We Believe</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Belief Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-left">
            <h3 className="font-semibold text-lg mb-2">✏️ Creativity Without Limits</h3>
            <p className="text-sm text-gray-600">
              Write what you feel — long stories, short quotes, tutorials, or confessions. InkLink gives your thoughts wings.
            </p>
          </div>

          {/* Belief Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-left">
            <h3 className="font-semibold text-lg mb-2">🌍 Inclusivity for All</h3>
            <p className="text-sm text-gray-600">
              Teenager or teacher, shy introvert or bold voice — everyone is welcomed and celebrated here.
            </p>
          </div>

          {/* Belief Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-left">
            <h3 className="font-semibold text-lg mb-2">🛡️ Safe & Respectful Space</h3>
            <p className="text-sm text-gray-600">
              Moderated and open. Our platform supports positive interaction and discourages hate, spam, or judgment.
            </p>
          </div>

          {/* Belief Card 4 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-left">
            <h3 className="font-semibold text-lg mb-2">🚀 Grow With Us</h3>
            <p className="text-sm text-gray-600">
              From beginner blogger to top creator — we help you learn SEO, build audience, and even earn recognition.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
