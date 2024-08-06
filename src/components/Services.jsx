import React from "react";
import img from "../images/web.svg";
import img2 from "../images/app.svg";
import img3 from "../images/hosting.svg";
import img4 from "../images/consultation.svg";
import LocationList from "./Locations/LocationList";
import ReactCountryFlag from "react-country-flag";
import allFlags from "../images/all-flags.png";

const Services = () => {
  const locations = [
    {
      name: "Kali Sikaran Trondheim",
      location: "Trondheim",
      facebookLink:
        "https://www.facebook.com/kalisikarantrondheim?locale=nb_NO",
    },
    {
      name: "Fight & Fitness",
      location: "Bergen",
      facebookLink: "https://www.trenkampsport.no/",
    },
    {
      name: "Flekkerøy Kampsportklubb",
      location: "Kristiansand",
      facebookLink: "https://www.facebook.com/flekkeroykampsport",
    },
    {
      name: "Kali Sikaran Oslo",
      location: "Oslo",
      facebookLink: "https://www.oslokalisikaran.com",
    },
    {
      name: "Kali Sikaran Sandnes",
      location: "Sandnes",
      facebookLink: "https://www.facebook.com/KailSikaranSandnes?locale=nb_NO",
    },
    {
      name: "Kali Sikaran Molde",
      location: "Molde",
      facebookLink: "https://www.facebook.com/groups/7808859137?locale=nb_NO",
    },
  ];

  const locationsse = [
    {
      name: "Kali Sikaran Göteborg",
      location: "Göteborg",
      facebookLink: "http://kalisikaran.se/",
    },
    {
      name: "Martial Art Centre",
      location: "Göteborg",
      facebookLink: "https://martialartscentre.se/en/hem-english/",
    },
    {
      name: "Kali Sikaran Kungsbacka",
      location: "Kungsbacka",
      facebookLink: "https://www.facebook.com/SanshiBudoKampcenter",
    },
    {
      name: "Kali Sikaran Alingsås",
      location: "Alingsås",
      facebookLink: "https://www.facebook.com/groups/1007653292652820",
    },
    {
      name: "Kali Sikaran Svalöf",
      location: "Svalöf",
      facebookLink: "https://kalisikaran.nu/",
    },
    {
      name: "Kali Sikaran Norrtälje",
      location: "Norrtälje",
      facebookLink: "https://www.facebook.com/profile.php?id=100063669153890",
    },
  ];
  return (
    <div
      id="services"
      className="lokasjonerkontainer bg-top bg-white bg-gray-100 py-12"
    >
      <h1
        id="vaareklubber"
        className="vaareklubber text-black text-center pb-5"
      >
        Våra klubbar i Sverige
      </h1>
      <LocationList locations={locationsse} />
      <div
        id="andreklubber"
        className="andreklubber text-white text-center pt-5"
      >
        Andra klubbar:
        <a
          href="https://www.self-defence.no"
          className="pl-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactCountryFlag
            countryCode="NO"
            svg
            style={{
              width: "2em",
              height: "2em",
            }}
            title="NO"
          />
        </a>
        <a
          href="https://www.self-defence.fi"
          className="pl-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactCountryFlag
            countryCode="FI"
            svg
            style={{
              width: "2em",
              height: "2em",
            }}
            title="FI"
          />
        </a>
        <a
          href="https://www.self-defence.es"
          className="pl-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactCountryFlag
            countryCode="ES"
            svg
            style={{
              width: "2em",
              height: "2em",
            }}
            title="ES"
          />
        </a>
        <a
          href="https://www.self-defence.org"
          className="pl-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactCountryFlag
            countryCode="DE"
            svg
            style={{
              width: "2em",
              height: "2em",
            }}
            title="DE"
          />
        </a>
        <a
          href="https://www.kalisikaran.com/school-directory"
          className="all-flags-container pl-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={100} className="all-flags" src={allFlags}></img>
        </a>
      </div>
    </div>
  );
};

export default Services;
