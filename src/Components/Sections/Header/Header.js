import './Header.css'
import HeaderLogo from "../../assets/images/logo.png"

function Header() {
  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg">

        <a className="navbar-brand">
          <img src={HeaderLogo} alt="Bytes Master" />
        </a>
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
              <a className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                Contact Us
              </a>
          </li>
          </ul>
        </div>

      </nav>
    </header>
  );
}

export default Header;
