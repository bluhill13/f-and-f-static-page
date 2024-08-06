import React from "react";
import video1 from "../images/videos/video3.mp4";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        id="video1"
        src={video1}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-8 text-center px-4">
          VELKOMMEN TIL FIGHT & FITNESS
        </h1>
        <h2 className="text-2xl md:text-4xl text-white font-bold mb-8 text-center px-4">
          GRATIS og helt uforpliktende prøveuke!
        </h2>
        <div>
          <button
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold"
          >
            Kom igang
          </button>
        </div>
      </div>
    </div>
  );
};