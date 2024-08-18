import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavLinks = (props) => {
  const { onClickHandler } = props;
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
    onClickHandler();
  };

  return (
    <div className="flex items-center">
      <button
        className="menu-text px-4 text-xl text-white hover:text-green-500"
        onClick={() => handleNavigate("/")}
      >
        Forside
      </button>
      <button
        className="menu-text px-4 text-xl text-white hover:text-green-500"
        onClick={() => handleNavigate("/omoss/")}
      >
        Om oss
      </button>
      <div className="relative">
        <button
          className="menu-text px-4 text-xl text-white hover:text-green-500"
          onClick={toggleDropdown}
        >
          Vi tilbyr
        </button>
        {isDropdownOpen && (
          <div className="absolute bg-gray-800 rounded shadow-lg mt-2">
            <button
              className="menu-text block px-4 py-2 text-white hover:bg-green-500"
              onClick={() => handleNavigate("/tilbud/service1")}
            >
              Service 1
            </button>
            <button
              className="menu-text block px-4 py-2 text-white hover:bg-green-500"
              onClick={() => handleNavigate("/tilbud/service2")}
            >
              Service 2
            </button>
            <button
              className="menu-text block px-4 py-2 text-white hover:bg-green-500"
              onClick={() => handleNavigate("/tilbud/service3")}
            >
              Service 3
            </button>
            <button
              className="menu-text block px-4 py-2 text-white hover:bg-green-500"
              onClick={() => handleNavigate("/tilbud/service4")}
            >
              Service 4
            </button>
            <button
              className="menu-text block px-4 py-2 text-white hover:bg-green-500"
              onClick={() => handleNavigate("/tilbud/service5")}
            >
              Service 5
            </button>
            <button
              className="menu-text block px-4 py-2 text-white hover:bg-green-500"
              onClick={() => handleNavigate("/tilbud/service6")}
            >
              Service 6
            </button>
          </div>
        )}
      </div>
      <button
        className="menu-text px-4 text-xl text-white hover:text-green-500"
        onClick={() => handleNavigate("/treningstider")}
      >
        Treningstider
      </button>
      <button
        className="menu-text px-4 text-xl text-white hover:text-green-500"
        onClick={() => handleNavigate("/medlemskap")}
      >
        Medlemskap
      </button>
      <button
        className="menu-text px-4 text-xl text-white hover:text-green-500"
        onClick={() => handleNavigate("/kontakt")}
      >
        Kontakt oss
      </button>
    </div>
  );
};

export default NavLinks;
