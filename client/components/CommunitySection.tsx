import React from "react";

const CommunitySection = () => {
  return (
    <section className="bg-blue-900 text-white py-16 px-8 text-center justify-center items-center">
      <h2 className="text-4xl font-bold mb-6">Join the Pirate Crew!</h2>
      <p className="text-lg mb-6">
        Be part of a vibrant community of adventurers. Share memes, join events,
        and enjoy the journey together.
      </p>
      <div className="justify-center space-x-4">
        <a
          href="https://x.com/gomuonsol?s=21" // Update with actual links
          target="_blank"
          rel="Join us on X"
          className="bg-yellow-500 text-blue-900 py-2 px-4 rounded-lg font-bold hover:bg-yellow-400"
        >
          Twitter
        </a>
        <a
          href="https://t.me/GomuGC" // Update with actual links
          target="_blank"
          rel="Join our telegram channel"
          className="bg-yellow-500 text-blue-900 py-2 px-4 rounded-lg font-bold hover:bg-yellow-400"
        >
          Telegram
        </a>
      </div>
    </section>
  );
};

export default CommunitySection;
