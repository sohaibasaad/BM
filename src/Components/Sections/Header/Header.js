import "./Header.css";
import { NavLink } from "react-router-dom";
import HeaderDarkLogo from "../../assets/images/logo.png";
import HeaderWhiteLogo from "../../assets/images/white-logo.png";
import { useEffect } from "react";


function Header({ isHeaderDark }) {
  const darkHeader = isHeaderDark;

  useEffect(() => {
    var navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        var navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      });
    });
  });

  return (
    <header className={`container header_dark_bg_${darkHeader}`}>
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand" to={"/home"}>
          {darkHeader ?
            <img src={HeaderWhiteLogo} alt="Bytes Master" />
            :
            <img src={HeaderDarkLogo} alt="Bytes Master" />}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink
                to={"/home"}
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/about-us"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/services"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/contact-us"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
