import "./Header.scss";
import logo from "../../assets/logos/InStock-Logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <img src={logo} alt="Logo" className="header__img" />
        </Link>
        <nav className="header__nav">
          <ul className="header__list-container">
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}
              className={
                activeLink === "/"
                  ? "header__active-list-item"
                  : "header__list-item"
              }
            >
              Warehouses
            </Link>
            <Link
              to="/inventory"
              onClick={() => handleLinkClick("/inventory")}
              className={
                activeLink === "/inventory"
                  ? "header__active-list-item"
                  : "header__list-item"
              }
            >
              Inventory
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
