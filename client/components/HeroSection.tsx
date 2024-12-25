import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-blue-500/50  justify-center h-[100vh] px-2 py-16 text-white">
      {/* Banner Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/gomu1.jpg')`,
          zIndex: -1,
          opacity: 0.8,
        }}
      ></div>

      {/* Content */}
      <div className="relative py-16 px-8 justify-center text-center">
        <h1 className="text-4xl  font-bold text-yellow-500 mb-4">
          GOMU GOMU COIN
        </h1>
        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
          Join the Adventure: <br />
          The Quest for Fun and the Treasure Begins!
        </h2>

        {/* Main Button */}

        {/* Social Links */}
        <div className="flex mt-8 justify-center space-x-4 my-4">
          <a
            href="https://t.me/GomuGC"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg font-bold hover:bg-blue-400"
          >
            Telegram
          </a>
          <a
            href="https://x.com/gomuonsol?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg font-bold hover:bg-blue-300"
          >
            X (Twitter)
          </a>
        </div>
        <button className="bg-red-600 text-white py-2 px-6 rounded-lg font-bold hover:bg-red-400 mb-4">
          Buy Now!!
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
