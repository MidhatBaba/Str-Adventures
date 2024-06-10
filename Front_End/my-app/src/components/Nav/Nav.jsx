import React from "react";
import "./Nav.css";
import img from "./logo.jpeg";
function Nav(){
    return(
        <div className="main">
                {/* <a className="a_whatsapp" href="#">
                  <i class="fa-brands fa-whatsapp"></i>
                </a> */}
            <div class="container-fluid one">
              <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                    <div className="end">
                     <img className="logo" src={img}/>
                     <div className="inner">
                    <a class="navbar-brand naam" href="#">Str  Adventure</a>
                    <h6 className="sky">Sky, Terrene, River</h6>
                    </div>
               </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                       <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                      <ul class="navbar-nav ms-auto">
                       <div class="nav-item dropdown">
                         <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Adventure Tourism</a>
                             <div class="dropdown-menu m-0">
                               {/* <a href="#" class="dropdown-item">Treks</a> */}

                               <div class="nav-item dropdown">
                                 <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Treks</a>
                                     <div class="dropdown-menu m-0">
                                        <a href="#" class="dropdown-item">Kashmir Great Lakes</a>
                                        <a href="#" class="dropdown-item">Tarsar Marsar</a>
                                        <a href="#" class="dropdown-item">Sonmes Yamhar</a>
                                        <a href="#" class="dropdown-item">Tosa Maidan</a>
                                        <a href="#" class="dropdown-item">Kounsarnag</a>
                                        <a href="#" class="dropdown-item">Barf Sar</a>
                                        <a href="#" class="dropdown-item">Tulian Trek</a>
                                        <a href="#" class="dropdown-item">Harnag Trek</a>
                                        <a href="#" class="dropdown-item">Harmukh Valley</a>
                                        <a href="#" class="dropdown-item">Mount Mahadev</a>
                                      </div>
                                  </div>
                              <a href="#" class="dropdown-item">Summits</a>
                               <a href="#" class="dropdown-item"> Day Treks</a>
                             </div>
                       </div>
                       <div class="nav-item dropdown">
                         <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Leisure</a>
                             <div class="dropdown-menu m-0">
                               <a href="#" class="dropdown-item">Kashmir Tour Packages</a>
                               <a href="#" class="dropdown-item">Kashmir OffBeat Packages</a>
                             </div>
                       </div>
                            <div class="nav-item dropdown">
                         <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Activities</a>
                             <div class="dropdown-menu m-0">
                               <a href="#" class="dropdown-item">Skiing</a>
                               <a href="#" class="dropdown-item">Rafting</a>
                               <a href="#" class="dropdown-item"> Paragliding</a>
                             </div>
                       </div>
                       <div class="nav-item dropdown">
                         <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Register</a>
                             <div class="dropdown-menu m-0">
                               <a href="#" class="dropdown-item">Login</a>
                               <a href="#" class="dropdown-item">Sign Up</a>
                             </div>
                       </div>
                   </ul>
                    </div>
              </div>
              </nav>
          </div>
        </div>
      
    );
}
export default Nav;