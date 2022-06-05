// IMPORT CONFIG & DEPENDENCIES
import React, { } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react";
<title></title>


const Header = ()=>{
    return (

       <header>
            <div>
                <div class="loader">
                    <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
            <div class="site-wrap">

            <div class="site-mobile-menu site-navbar-target">
            <div class="site-mobile-menu-header">
                <div class="site-mobile-menu-close mt-3">
                <span class="icon-close2 js-menu-toggle"></span>
                </div>
            </div>
            <div class="site-mobile-menu-body"></div>
            </div>
            </div>
            <header class="site-navbar js-sticky-header site-navbar-target" role="banner">

                    <div class="container">
                        <div class="row align-items-center">

                            <div class="col-6 col-xl-2">
                                <h1 class="mb-0 site-logo"><a href="index.html" class="h2 mb-0">Sea BANK<span class="text-primary">.</span>
                                </a></h1>
                            </div>

                            <div class="col-12 col-md-10 d-none d-xl-block">
                                <nav class="site-navigation position-relative text-right" role="navigation">

                                    <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                        <li><a href="#home-section" class="nav-link">Home</a></li>
                                        <li class="has-children">
                                            <a href="#about-section" class="nav-link">About Us</a>
                                            <ul class="dropdown">
                                                <li><a href="#team-section" class="nav-link">Team</a></li>
                                                <li><a href="#gallery-section" class="nav-link">Gallery</a></li>
                                                <li><a href="#services-section" class="nav-link">Services</a></li>
                                                <li><a href="#testimonials-section" class="nav-link">Testimonials</a></li>
                                            </ul>
                                        </li>


                                        <li><a href="#blog-section" class="nav-link">Blog</a></li>
                                        <li><a href="#contact-section" class="nav-link">Contact</a></li>
                                        <li> <a href="dashboard/pages/sign-in.html"><button type="button"
                                            class="btn btn-primary">Sign-in</button></a></li>
                                        <li class="social"><a href="#contact-section" class="nav-link"><span class="icon-facebook"></span></a>
                                        </li>
                                        <li class="social"><a href="#contact-section" class="nav-link"><span class="icon-twitter"></span></a>
                                        </li>
                                        <li class="social"><a href="#contact-section" class="nav-link"><span class="icon-linkedin"></span></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>


                            <div class="col-6 d-inline-block d-xl-none ml-md-0 py-3" style="position: relative; top: 3px;"><a href="#"
                                class="site-menu-toggle js-menu-toggle float-right"><span class="icon-menu h3"></span></a></div>

                        </div>
                    </div>

                </header>
        </header>
      
      
    )
}
export default Header;