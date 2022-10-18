import React from "react";
import logo1 from "../assets/img/logo.png";
import "../assets/css/Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand ms-5" href="#">
            <img className="logo_image" src={logo1} alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav m-auto">
              <li class="nav-item me-4 ">
                <a class="nav-link" aria-current="page" href="#">
                  Ons aanbod
                </a>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link" aria-current="page" href="#">
                  Onze realisaties
                </a>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link" aria-current="page" href="#">
                  Onze troeven
                </a>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link" aria-current="page" href="#">
                  Ons team
                </a>
              </li>
              <li class="nav-item ">
                <button className="btn navbar_btn">50% korting</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
