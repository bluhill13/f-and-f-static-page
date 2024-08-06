import React from "react";
import LocationItem from "./LocationItem";
import "./LocationList.css"; // Import CSS for styling

const LocationList = ({ locations }) => {
  return (
    <div className="location-list">
      {locations.map((location, index) => (
        <LocationItem
          key={index}
          name={location.name}
          location={location.location}
          facebookLink={location.facebookLink}
        />
      ))}
    </div>
  );
};

export default LocationList;
