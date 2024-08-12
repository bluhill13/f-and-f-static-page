import { useNavigate } from "react-router-dom";

const NavLinks = (props) => {
  const { onClickHandler } = props;
  const navigate = useNavigate();

  const scrollToBottom = () => {
    onClickHandler();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth", // Optional: Smooth scrolling animation
    });
  };

  const scrollToSection = () => {
    onClickHandler();
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
      <button
        className="menu-text px-4 text-xl text-white hover:text-green-500"
        onClick={(e) => navigate("/")}
      >
        Forside
      </button>
      <button
        className="menu-text px-4 text-xl text-white hover:text-green-500"
        onClick={(e) => navigate("/omoss/")}
      >
        Om oss
      </button>
      <button
        className="menu-text px-4 text-xl text-white hover:text-green-500"
        onClick={(e) => navigate("/tilbud")}
      >
        Vi tilbyr
      </button>
      <button
        className="menu-text px-4 text-xl text-white hover:text-green-500"
        onClick={(e) => navigate("/treningstider")}
      >
        Treningstider
      </button>
      <button
        className="menu-text px-4 text-xl text-white hover:text-green-500"
        onClick={(e) => navigate("/medlemskap")}
      >
        Medlemskap
      </button>
      <button
        className="menu-text px-4 text-xl text-white hover:text-green-500"
        onClick={(e) => navigate("/kontakt")}
      >
        Kontakt oss
      </button>
    </>
  );
};

export default NavLinks;
