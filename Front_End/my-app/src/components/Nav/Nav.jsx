import React from "react";
import "./Nav.css";
import img from "./logo.jpeg";
import "./Tryme.css";
function Nav() {
  return (
    <div>
      <div className="container-fluid one">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <img className="logo" src={img} alt="Logo" />
              <div className="inner ms-2">
                <a className="navbar-brand naam" href="#">
                  Str Adventure
                </a>
                <h6 className="sky">Sky, Terrene, River</h6>
              </div>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             {/*********************ADVENTURE TOURISM *****************/}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="adventureTourismDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Adventure Tourism</a>
                <ul className="dropdown-menu" aria-labelledby="adventureTourismDropdown">
                    <li className="dropdown-submenu">
                      <a className="dropdown-item dropdown-toggle" href="#" id="treksDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Treks</a>
                      <ul className="dropdown-menu" aria-labelledby="treksDropdown">
                        <li><a className="dropdown-item" href="#">Kashmir Great Lakes</a></li>
                        <li><a className="dropdown-item" href="#">Tarsar Marsar</a></li>
                        <li><a className="dropdown-item" href="#">Sonmes Yamhar</a></li>
                        <li><a className="dropdown-item" href="#">Tosa Maidan</a></li>
                        <li><a className="dropdown-item" href="#">Kounsarnag</a></li>
                        <li><a className="dropdown-item" href="#">Barf Sar</a></li>
                        <li><a className="dropdown-item" href="#">Tulian Trek</a></li>
                        <li><a className="dropdown-item" href="#">Harnag Trek</a></li>
                        <li><a className="dropdown-item" href="#">Harmukh Valley</a></li>
                        <li><a className="dropdown-item" href="#">Mount Mahadev</a></li>
                      </ul>
                    </li>
                       <li><a className="dropdown-item" href="#">Summits</a></li>
                       <li><a className="dropdown-item" href="#">Day Treks</a></li>
                </ul>
                </li>

                {/*********************LEISURE *********************/}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="leisureDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Leisure</a>
                <ul className="dropdown-menu" aria-labelledby="leisureDropdown">
                      <li className="dropdown-submenu">
                      <a className="dropdown-item dropdown-toggle" href="#" id="treksDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kashmir Tour Packages</a>
                      <ul className="dropdown-menu " id="cc" aria-labelledby="treksDropdown">
                         <li><a className="dropdown-item" href="#">Srinagar</a></li>
                         <li><a className="dropdown-item" href="#">Pahalgam</a></li>
                         <li><a className="dropdown-item" href="#">Gulmarg</a></li>
                         <li><a className="dropdown-item" href="#">Sonamarg</a></li>
                      </ul>
                      </li>
                      <li><a className="dropdown-item" href="#">Kashmir OffBeat Packages</a></li>
                  </ul>
                </li>
                {/****************************ACTIVITIES ************************/}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="activitiesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Activities
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="activitiesDropdown">
                    <li><a className="dropdown-item" href="#">Skiing</a></li>
                    <li><a className="dropdown-item" href="#">Rafting</a></li>
                    <li><a className="dropdown-item" href="#">Paragliding</a></li>
                  </ul>
                </li>
                {/****************************REGISTER ************************************/}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="registerDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Register
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="registerDropdown">
                    <li><a className="dropdown-item" href="#">Login</a></li>
                    <li><a className="dropdown-item" href="#">Sign Up</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
