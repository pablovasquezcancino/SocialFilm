import React from "react";
import video from "../assets/fellini.mp4";

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div className="sticky z-20 p-5 text-2xl text-yellow-300 bg-blue-900 bg-opacity-50 rounded-xl">
        <h1>Social Film: Una red social de cine</h1>
		
      </div>
      <video
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        autoPlay
        muted
        loop
        src={video}
      ></video>
    </div>
  );
};

export default HeroSection;
