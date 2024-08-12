import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/icons/logoff.png";
import NavBarButton from "@/components/Navbar/NavBarButton";

export default function NavBar() {
  const [top, setTop] = useState(true);
  const [isOpen, setisOpen] = React.useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${
        !top && "bg-white shadow-lg"
      }`}
    >
      <div className="flex flex-row justify-between items-center py-2">
        <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
          <Link to="/">
            <h1 className="pl-2 text-blue-900">
              <img className="" width={180} src={logo} alt="PNG Image" />
            </h1>
          </Link>
        </div>
        <div className="group flex flex-col items-center">
          <button
            className="p-2 rounded-lg lg:hidden text-blue-600"
            onClick={handleClick}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
          <div className="hidden space-x-11 lg:inline-block p-5">
            <NavBarButton href={"/"} buttonText={"Forside"} />
            <NavBarButton href={"/omoss"} buttonText={"Om oss"} />
            <NavBarButton href={"/tilbud"} buttonText={"Vi tilbyr"} />
            <NavBarButton
              href={"/treningstider"}
              buttonText={"Treningstider"}
            />
            <NavBarButton href={"/kontakt"} buttonText={"Kontakt Oss"} />
          </div>

          <div
            className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-black rounded-lg block lg:hidden shadow-xl pt-10 pb-10 mt-10 ${
              isOpen ? "block" : "hidden"
            } `}
          >
            <div className="flex flex-col space-y-6">
              <NavBarButton href={"/omoss"} buttonText={"Om oss"} />
              <NavBarButton href={"/tilbud"} buttonText={"Vi tilbyr"} />
              <NavBarButton
                href={"/treningstider"}
                buttonText={"Treningstider"}
              />
              <NavBarButton href={"/kontakt"} buttonText={"Kontakt Oss"} />
              <div />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
