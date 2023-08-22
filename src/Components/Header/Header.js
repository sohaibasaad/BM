import { useState } from 'react';
import Button from '../Button/Button';
import './Header.css'
import HeaderLogo from "../assets/images/logo.png"

function Header() {
  return (
    <header className="container">
      <nav class="navbar navbar-expand-lg">

        <a class="navbar-brand" href="#">
          <img src={HeaderLogo} alt="Bytes Master" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li class="nav-item">
              <Button primary>More Info</Button>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  );
}

export default Header;
