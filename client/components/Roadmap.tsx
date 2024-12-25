"use client";
import React, { useState } from "react";

const roadmapData = [
  {
    phase: "Phase 1: The Start of the Adventure",
    details: [
      "Launch of Gomu Gomu Coin: The coin goes live!",
      "Community Building: A strong community of pirates.",
      "Social Media Presence: Memes and pirate humor!",
    ],
    bgColor: "bg-sky-400",
  },
  {
    phase: "Phase 2: New Horizons",
    details: [
      "First Listings: Listed on decentralized exchanges.",
      "Meme Power: Growth through unstoppable memes.",
      "A Few Surprises: Find small treasures on the way.",
    ],
    bgColor: "bg-red-500",
  },
  {
    phase: "Phase 3: The Hunt for the One Piece",
    details: [
      "Continuous Growth: Strengthen the pirate crew.",
      "Community Events: Fun events and treasure hunts.",
      "The Treasure in Sight: The One Piece is near!",
    ],
    bgColor: "bg-yellow-400",
  },
  {
    phase: "Phase 4: Finding the One Piece?",
    details: [
      "The Journey Continues: The fun never ends!",
      "Slow but Steady Progress: Community-powered growth.",
    ],
    bgColor: "bg-green-400",
  },
];

const Roadmap = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  return (
    <section
      style={{
        backgroundImage: "url('/gomu3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-blue-500/10 py-8 px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          The Roadmap
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {roadmapData.map((phase, index) => (
            <div
              key={index}
              className="relative w-full h-64"
              style={{ perspective: "1000px" }}
            >
              <div
                className={`w-full h-full relative transition-transform duration-500 transform ${
                  activePhase === index ? "rotate-y-180" : ""
                } rounded-lg shadow-md shadow-gray-200`}
                style={{
                  transformStyle: "preserve-3d",
                }}
                onClick={() =>
                  setActivePhase(activePhase === index ? null : index)
                }
              >
                {/* Front Side */}
                <div
                  className={`absolute w-full h-full flex items-center justify-center ${phase.bgColor} text-white rounded-lg `}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(0deg)",
                  }}
                >
                  <h3 className="text-2xl font-bold text-center px-4">
                    {phase.phase}
                  </h3>
                </div>

                {/* Back Side */}
                <div
                  className="absolute w-full h-full flex flex-col justify-center bg-blue-500 text-white text-xl p-6 rounded-lg"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <ul className="space-y-2  text-center">
                    {phase.details.map((detail, idx) => (
                      <li key={idx} className="">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
