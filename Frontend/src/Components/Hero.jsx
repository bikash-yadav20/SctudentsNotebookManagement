import React from "react";
import logo from '../assets/image.png'

const Hero = () => {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${logo})`, 
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-wide text-gray-800">
          Welcome
        </h2>
        <h1
          className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text 
                     bg-linear-to-r from-red-500 via-green-500 to-blue-500 
                     transform transition duration-500 hover:scale-105"
          style={{
            textShadow:
              "2px 2px 0 #ff0000, -2px -2px 0 #00ff00, 2px -2px 0 #0000ff",
          }}
        >
          KAIZEN ACADEMY
        </h1>
      </div>
    </section>
  );
};

export default Hero;
