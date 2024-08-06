const NavLinks = (props) => {
  return (
    <>
      <button
          className="menu-text px-4 text-xl text-green-600 hover:text-green-500"
        onClick={(e) => navigate("/omoss/")}
      >
        Om oss
      </button>
      <button
          className="menu-text px-4 text-xl text-green-600 hover:text-green-500"
        onClick={(e) => navigate("/tilbud")}
      >
        Vi tilbyr
      </button>
      <button
          className="menu-text px-4 text-xl text-green-600 hover:text-green-500"
        onClick={(e) => navigate("/treningstider")}
      >
        Treningstider
      </button>

      <button
          className="menu-text px-4 text-xl text-green-600 hover:text-green-500"
        onClick={(e) => navigate("/kontakt")}
      >
        Kontakt oss
      </button>
    </>
  );
};

export default NavLinks;
