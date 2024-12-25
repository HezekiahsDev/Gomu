import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      className=""
      style={{
        backgroundImage: "url('/gomu2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row bg-yellow-600/30 max-w-6xl mx-auto p-8 rounded-lg px-8 items-center justify-center">
        {/* Image Section */}
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8">
          <Image
            src="/gomu4.jpg"
            alt="Gomu Gomu Coin"
            width={280}
            height={280}
            className="rounded"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-4xl text-blue-900 font-bold mb-4 text-center">
            What is Gomu Gomu Coin?
          </h2>
          <p className="text-lg  font-medium leading-7 text-center text-white ">
            Gomu Gomu Coin is more than just a crypto project; it’s an
            adventure. It’s about fun, community, and the thrill of setting sail
            into uncharted waters with your fellow pirates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
