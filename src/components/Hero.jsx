import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../images/web-dev.svg";
import video1 from "../images/videos/video3.mp4";

import VideoSlider from "./VideoSlider";

const Hero = () => {
  const scrollToSection = () => {
    const section = document.getElementById("services");
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 85,
        behavior: "smooth", // Optional: Smooth scrolling animation
      });
    }
  };

  return (
    <>
      <div className="hero" id="hero">
        <video
          className="video"
          id="video1"
          src={video1}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="videocontent">
          <h1 className="heading-video"> VELKOMMEN TIL FIGHT & FITNESS </h1>
          <h1 className="heading-video-under-text text-center">
            GRATIS og helt uforpliktende prøveuke!
          </h1>
          <div>
            <button className="locationbutton" onClick={scrollToSection}>
              Kom igang
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
