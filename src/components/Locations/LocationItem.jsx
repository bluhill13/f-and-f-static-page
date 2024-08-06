import React from "react";
import "./LocationItem.css"; // Import CSS for styling

const LocationItem = ({ name, location, facebookLink }) => {
  return (
    <div className="location-item">
      <div className="location-info">
        <div className="klubbnavn name text-white">{name}</div>
        <div className="location text-white pb-5 text-center">{location}</div>
      </div>
      <button className="location-button text-black  bg-white hover:bg-[#ED1C24] inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
        <a
          href={facebookLink}
          className="facebook-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gå till klubb
        </a>
      </button>
    </div>
  );
};

export default LocationItem;
