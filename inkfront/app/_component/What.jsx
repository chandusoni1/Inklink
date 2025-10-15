"use client";
import React from "react";

function Why() {
  return (
    <div className="bg-[#f1ecec]" >
      {/* Why Join InkLink Section */}
      <section className="py-16 px-5">
        <div className="bg-[#eddcd2] text-black rounded-2xl p-10 max-w-5xl mx-auto shadow-xl">
          <h2 className="text-3xl text-center font-semibold mb-10">
            Why Join InkLink?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "🌍 Express Freely",
                desc: "Write about anything and everything — your voice matters.",
              },
              // {
              //   title: "🚀 Share to Grow",
              //   desc: "Connect with readers who love your vibe and build a fanbase.",
              // },
              {
                title: "🧠 Learn & Explore",
                desc: "Explore topics like Tech, Lifestyle, AI, and Self Growth.",
              },
              // {
              //   title: "💬 Community Feedback",
              //   desc: "Get comments, likes, and support from real users.",
              // },
              // {
              //   title: "🎯 Personalized Dashboard",
              //   desc: "Track your posts, stats, and followers all in one place.",
              // },
              {
                title: "📱 Mobile Ready",
                desc: "Write and read blogs on any device, anytime, anywhere.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 transition-transform"
              >
                <h4 className="text-[#2575fc] font-semibold text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Why;
