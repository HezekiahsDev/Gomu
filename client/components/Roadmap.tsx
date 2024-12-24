import React from "react";

const roadmapData = [
  {
    phase: "Phase 1: The Start of the Adventure",
    details: [
      "Launch of Gomu Gomu Coin: The coin goes live!",
      "Community Building: A strong community of pirates.",
      "Social Media Presence: Memes and pirate humor!",
    ],
  },
  {
    phase: "Phase 2: New Horizons",
    details: [
      "First Listings: Listed on decentralized exchanges.",
      "Meme Power: Growth through unstoppable memes.",
      "A Few Surprises: Find small treasures on the way.",
    ],
  },
  {
    phase: "Phase 3: The Hunt for the One Piece",
    details: [
      "Continuous Growth: Strengthen the pirate crew.",
      "Community Events: Fun events and treasure hunts.",
      "The Treasure in Sight: The One Piece is near!",
    ],
  },
  {
    phase: "Phase 4: Finding the One Piece?",
    details: [
      "The Journey Continues: The fun never ends!",
      "Slow but Steady Progress: Community-powered growth.",
    ],
  },
];

const Roadmap = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      <h2 className="text-4xl font-bold mb-8 text-center">The Roadmap</h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {roadmapData.map((phase, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">{phase.phase}</h3>
            <ul className="list-disc list-inside space-y-2">
              {phase.details.map((detail, idx) => (
                <li key={idx} className="text-lg">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
