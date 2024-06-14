import React from "react";
import "./Nav.css";
import img from "./logo.jpeg";
import "./Tryme.css";
import { Button } from "@mantine/core";
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
                        <li><a className="dropdown-item" href="#">Kashmir Great Lakes(Pir Panjal)</a></li>
                        <li><a className="dropdown-item" href="#">Tarsar Marsar</a></li>
                        <li><a className="dropdown-item" href="#">Sonmes Yamhar</a></li>
                        <li><a className="dropdown-item" href="#">Tosa Maidan</a></li>
                        <li><a className="dropdown-item" href="#">Kounsarnag</a></li>
                        <li><a className="dropdown-item" href="#">Barf Sar</a></li>
                        <li><a className="dropdown-item" href="#">Tulian Trek</a></li>
                        <li><a className="dropdown-item" href="#">Harnag Trek</a></li>
                        <li><a className="dropdown-item" href="#">Harmukh Valley/Gangbal Trek</a></li>
                      </ul>
                    </li>
                       <li className="dropdown-submenu">
                      <a className="dropdown-item dropdown-toggle" href="#" id="treksDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Summits</a>
                      <ul className="dropdown-menu " id="cc" aria-labelledby="treksDropdown">
                         <li><a className="dropdown-item" href="#">Mount Mahadev</a></li>
                         <li><a className="dropdown-item" href="#">Sunset Peak</a></li>
                         <li><a className="dropdown-item" href="#">Sheeneh Mane Peak</a></li>
                         <li><a className="dropdown-item" href="#">Loharkut</a></li>
                         <li><a className="dropdown-item" href="#">Tattakuti</a></li>
                      </ul>
                      </li>
                       <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#" id="treksDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Day Treks</a>
                       <ul className="dropdown-menu " id="cc" aria-labelledby="treksDropdown">
                         <li><a className="dropdown-item" href="#">Dachigam(Jungle Safari)</a></li>
                         <li><a className="dropdown-item" href="#">Chiranbal</a></li>
                         <li><a className="dropdown-item" href="#">Kongwatan</a></li>
                         <li><a className="dropdown-item" href="#">Marchoii/Naranag</a></li>
                         <li><a className="dropdown-item" href="#">Chouharnag Lakes</a></li>
                         <li><a className="dropdown-item" href="#">Girsar/Sinthan Top</a></li>
                         <li><a className="dropdown-item" href="#">Table Top</a></li>
                         <li><a className="dropdown-item" href="#">Thajwas Glacier/Bear Valley</a></li>
                         <li><a className="dropdown-item" href="#">Sheesnag Lake Trek</a></li>
                         <li><a className="dropdown-item" href="#">Raineera Meadow Trek</a></li>
                      </ul>  
                      </li>
                </ul>
                </li>

                {/*********************LEISURE *********************/}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="leisureDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Leisure</a>
                <ul className="dropdown-menu" aria-labelledby="leisureDropdown">
                     {/* *******************dropdown */}
                     
                     
                      <li className="dropdown-submenu">
                      <a className="dropdown-item dropdown-toggle" href="#" id="treksDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kashmir Tour Packages</a>
                      <ul className="dropdown-menu " id="cc" aria-labelledby="treksDropdown">
                         <li><a className="dropdown-item" href="#">Srinagar</a></li>
                         <li><a className="dropdown-item" href="#">Pahalgam</a></li>
                         <li><a className="dropdown-item" href="#">Gulmarg</a></li>
                         <li><a className="dropdown-item" href="#">Sonamarg</a></li>
                         <li><a className="dropdown-item" href="#">Dodhpathri</a></li>
                         <li><a className="dropdown-item" href="#">Yousmarg</a></li>
                      </ul>
                      </li>
                      {/* ***************** */}
                      <li className="dropdown-submenu">
                      <a className="dropdown-item dropdown-toggle" href="#" id="treksDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kashmir OffBeat Packages</a>
                      <ul className="dropdown-menu " id="cc" aria-labelledby="treksDropdown">
                         <li><a className="dropdown-item" href="#">Lolab Valley</a></li>
                         <li><a className="dropdown-item" href="#">Daksum Valley</a></li>
                         <li><a className="dropdown-item" href="#">Simpthan Top</a></li>
                         <li><a className="dropdown-item" href="#">Gurez Valley</a></li>
                         <li><a className="dropdown-item" href="#">Bangus Valley</a></li>
                      </ul>
                      </li>
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
                    <li><a className="dropdown-item" href="#">Water Jet Skiing</a></li>
                    <li><a className="dropdown-item" href="#">ATV/Snow Mobiling</a></li>
                    <li><a className="dropdown-item" href="#">Angling</a></li>
                    <li><a className="dropdown-item" href="#">Bird Watching</a></li>
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
                <li><Button>BOOK NOW</Button></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
