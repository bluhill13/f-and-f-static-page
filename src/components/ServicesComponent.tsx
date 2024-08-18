import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../images/images/kaliinfobilde.jpg";
import boxing from "../images/images/boxing.jpg";
import kickboxing from "../images/images/Kickboxing.jpg";
import juejitsu from "../images/images/juejitsu.jpg";
import kali from "../images/images/kali.jpg";
import styrkeTrening from "../images/images/styrketrening.jpg";
import cardio from "../images/images/cardio.jpg";

export default function ServiceGrid() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Ju Jitsu",
      imageSrc: juejitsu,
      href: "/tilbud/Ju-Jitsu",
    },
    {
      title: "Kickboxing",
      imageSrc: kickboxing,
      href: "/tilbud/Kickboxing",
    },
    {
      title: "Boxing",
      imageSrc: boxing,
      href: "/tilbud/Boxing",
    },
    {
      title: "Selvforsvar for voksne - Kali sikaran",
      imageSrc: kali,
      href: "/tilbud/Kali-sikaran",
    },
    {
      title: "Cardio KickBoxing",
      imageSrc: cardio,
      href: "/tilbud/Cardio-KickBoxing",
    },
    {
      title: "Styrketrening",
      imageSrc: styrkeTrening,
      href: "/tilbud/Styrketrening",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto pt-10 pb-6">
      <div className="flex flex-wrap justify-evenly mx-4 bg-gray-300">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => navigate(service.href)}
            className="cursor-pointer px-6 pt-5 pb-5"
            style={{
              flexBasis: "100%",
              maxWidth: "49%",
            }}
          >
            <div
              className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 pt-5"
              style={{
                flexBasis: "100%",
                maxWidth: "100%",
                padding: "4rem",
                boxSizing: "border-box",
              }}
            >
              <img
                src={service.imageSrc}
                alt={service.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-xl font-semibold text-blue-600 bg-none bg-opacity-100 p-2 rounded">
                  {service.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
