import React from "react";
import img from "../images/Web-developer.svg";
import { Link } from "react-router-dom";
import infoImage from "../images/images/infobilde.jpg";

const Intro = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth", // Optional: Smooth scrolling animation
    });
  };
  return (
    <>
      <div className="m-auto max-w-12xl p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col lg:flex-row py-8 justify-evenly lg:text-left"
          data-aos="fade-up"
        >
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-start w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h1 className="info-title text-3xl pb-3  text-white">
              HVA ER KALI SIKARAN?
            </h1>
            <div>
              <p className="infotext my-3 text-white">
                Fight & Fitness har et bredt treningstilbud som passer alle,
                enten målet er å komme i god form, lære selvforsvar, eller vil
                strebe etter å bli en topp fighter.
              </p>
            </div>
            <div>
              <p className="infotext my-3 text-white">
                Det stilles ingen krav til forkunnskaper eller fysiske
                ferdigheter for å kunne trene hos oss.
              </p>
            </div>
            <div>
              <p className=" infotext my-3 text-white">
                Velkommen til god trening i et godt miljø!
              </p>
            </div>
            {/* <button className="text-white bg-red-800 hover:bg-red-700 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
              <a
                href="https://www.kalisikaran.com/what-is-kali-sikaran?"
                className="facebook-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Les mer her
              </a>
            </button> */}
          </div>
          <div className="infoimagecontainer flex justify-end">
            <img className="infoimage content-end" src={infoImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
