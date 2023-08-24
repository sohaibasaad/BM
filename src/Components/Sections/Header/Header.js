import './Header.css'
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/images/logo.png"

function Header() {
  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg">

        <Link className="navbar-brand" to={'/home'}>
          <img src={HeaderLogo} alt="Bytes Master" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link to={'/home'} className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/home'} className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
            <Link to={'/home'} className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
            <Link to={'/home'} className="nav-link">
                Contact Us
              </Link>
          </li>
          </ul>
        </div>

      </nav>
    </header>
  );
}

export default Header;
