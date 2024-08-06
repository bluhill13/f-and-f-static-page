import React from "react";
import infoImage from "../images/images/infobilde.jpg";
import Card from '@/components/Card';

const Intro = () => {
  return (
    <>
      <div className="m-auto max-w-12xl p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col lg:flex-row py-8 justify-evenly lg:text-left"
          data-aos="fade-up"
        >
          <img src={infoImage} alt="Kali" className="w-full bg-blend-overlay"/>
          <Card title={"Er du klar for å rive akillesen av en 2 meter høy mann?"}
                description={
                  "Fight & Fitness har et bredt treningstilbud som passer alle, enten målet er å komme i god form," +
                  "lære selvforsvar, eller vil strebe etter å bli en topp fighter." +
                  "Det stilles ingen krav til forkunnskaper eller fysiske " +
                  "ferdigheter for å kunne trene hos oss. " +
                  "Velkommen til god trening i et godt miljø!"
                }
          />
        </div>
      </div>
    </>
  )
    ;
};

export default Intro;
