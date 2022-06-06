// IMPORT CONFIG & DEPENDENCIES
import React, { } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react";
<title></title>


const Header = ()=>{
    return (

       <header>
            <div>
                {/* <div class="loader">
                    <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div> */}
            </div>
            <div className="site-wrap">

            <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
                </div>
            </div>
            <div className="site-mobile-menu-body"></div>
            </div>
            </div>
            <header className="site-navbar js-sticky-header site-navbar-target" role="banner">

                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-6 col-xl-2">
                                <h1 className="mb-0 site-logo"><a href="index.html" className="h2 mb-0">Sea BANK<span className="text-primary">.</span>
                                </a></h1>
                            </div>

                            <div className="col-12 col-md-10 d-none d-xl-block">
                                <nav className="site-navigation position-relative text-right" role="navigation">

                                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                        <li><a href="#home-section" className="nav-link">Home</a></li>
                                        <li className="has-children">
                                            <a href="#about-section" className="nav-link">About Us</a>
                                            <ul className="dropdown">
                                                <li><a href="#team-section" className="nav-link">Team</a></li>
                                                <li><a href="#gallery-section" className="nav-link">Gallery</a></li>
                                                <li><a href="#services-section" className="nav-link">Services</a></li>
                                                <li><a href="#testimonials-section" className="nav-link">Testimonials</a></li>
                                            </ul>
                                        </li>


                                        <li><a href="#blog-section" className="nav-link">Blog</a></li>
                                        <li><a href="#contact-section" className="nav-link">Contact</a></li>
                                        <li> <a href="dashboard/pages/sign-in.html"><button type="button"
                                            className="btn btn-primary">Sign-in</button></a></li>
                                        <li className="social"><a href="#contact-section" className="nav-link"><span className="icon-facebook"></span></a>
                                        </li>
                                        <li className="social"><a href="#contact-section" className="nav-link"><span className="icon-twitter"></span></a>
                                        </li>
                                        <li className="social"><a href="#contact-section" className="nav-link"><span className="icon-linkedin"></span></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>


                            <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={{position: 'relative; top: 3px'}}><a href="#"
                                className="site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h3"></span></a></div>

                        </div>
                    </div>

                </header>
        </header>
      
      
    )
}
export default Header;