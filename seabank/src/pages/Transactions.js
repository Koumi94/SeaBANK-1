
// IMPORT CONFIG & DEPENDENCIES
import React, {  } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import "../assets/img/apple-icon.png";
import "../assets/img/favicon.png";
<title>
  Sea BANK
</title>
// <!--     Fonts and icons     -->
import "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700"
// <!-- Nucleo Icons -->
import "/dashboard/assets/css/nucleo-icons.css" ;
import "/dashboard/assets/css/nucleo-svg.css";

import "https://kit.fontawesome.com/42d5adcbca.js";
// <!-- Material Icons -->
import "https://fonts.googleapis.com/icon?family=Material+Icons+Round";
// <!-- CSS Files -->
import "/dashboard/assets/css/material-dashboard.css" ;
// <!--   Core JS Files   -->

import "../assets/js/core/popper.min.js";
import"../assets/js/core/bootstrap.min.js";
import"../assets/js/plugins/perfect-scrollbar.min.js";
import"../assets/js/plugins/smooth-scrollbar.min.js";
  
 
const Transaction = () =>{
  return(


    <body class="g-sidenav-show  bg-gray-200">
  <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
    <div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand m-0" href=" " target="_blank">
        <img src="./assets/img/logo-ct.png" class="navbar-brand-img h-100" alt="main_logo"/>
        <span class="ms-1 font-weight-bold text-white">Sea Bank</span>
      </a>
    </div>
    <hr class="horizontal light mt-0 mb-2"/>
    <div class="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white " href="../dashboard.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">dashboard</i>
            </div>
            <span class="nav-link-text ms-1">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="./Transfer.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">table_view</i>
            </div>
            <span class="nav-link-text ms-1">transfer</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white active bg-gradient-primary " href="./transactions.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">receipt_long</i>
            </div>
            <span class="nav-link-text ms-1">Transactions</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="./profile.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">person</i>
            </div>
            <span class="nav-link-text ms-1">Profile</span>
          </a>
        </li>
        
      </ul>
    </div>
    <div class="sidenav-footer position-absolute w-100 bottom-0 ">
      <div class="mx-3">
        <a class="btn bg-gradient-primary mt-4 w-100" href="./sign-in.html" type="button">log Out</a>
      </div>
    </div>
  </aside>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    {/* <!-- Navbar --> */}
    <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div class="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <h6 class="font-weight-bolder mb-0">Transactions</h6>
        </nav>
        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div class="ms-md-auto pe-md-3 d-flex align-items-center">
            <div class="input-group input-group-outline">
              <label class="form-label">Type here...</label>
              <input type="text" class="form-control"/>
            </div>
          </div>
          <ul class="navbar-nav  justify-content-end">
            <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav">
                <div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* <!-- End Navbar --> */}
    <div class="container-fluid py-4">
      <div class="row min-vh-80">
        <div class="col-12 mx-auto">
          <div class="card mt-4">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h4 class="text-white text-capitalize ps-3">Transactions</h4>
              </div>
            </div>
            <div class="col-12 mx-auto">
              <div class="card mt-4">
                <div class="card-header pb-0 px-3">
                  <div class="row">
                    <div class="col-md-6">
                      <h6 class="mb-0">Your Transaction's</h6>
                    </div>
                    <div class="col-md-6 d-flex justify-content-start justify-content-md-end align-items-center">
                      <i class="material-icons me-2 text-lg">date_range</i>
                      <small>23 - 30 March 2020</small>
                    </div>
                  </div>
                </div>
                <div class="card-body pt-4 p-3">
                  <h6 class="text-uppercase text-body text-xs font-weight-bolder mb-3">Newest</h6>
                  <ul class="list-group">
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <button class="btn btn-icon-only btn-rounded btn-outline-danger mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i class="material-icons text-lg">expand_more</i></button>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Netflix</h6>
                          <span class="text-xs">27 March 2020, at 12:30 PM</span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">
                        - $ 2,500
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <button class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i class="material-icons text-lg">expand_less</i></button>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Apple</h6>
                          <span class="text-xs">27 March 2020, at 04:30 AM</span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                        + $ 2,000
                      </div>
                    </li>
                  </ul>
                  <h6 class="text-uppercase text-body text-xs font-weight-bolder my-3">Yesterday</h6>
                  <ul class="list-group">
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <button class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i class="material-icons text-lg">expand_less</i></button>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Stripe</h6>
                          <span class="text-xs">26 March 2020, at 13:45 PM</span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                        + $ 750
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <button class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i class="material-icons text-lg">expand_less</i></button>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">HubSpot</h6>
                          <span class="text-xs">26 March 2020, at 12:30 PM</span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                        + $ 1,000
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <button class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i class="material-icons text-lg">expand_less</i></button>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Creative Tim</h6>
                          <span class="text-xs">26 March 2020, at 08:30 AM</span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                        + $ 2,500
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <button class="btn btn-icon-only btn-rounded btn-outline-dark mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i class="material-icons text-lg">priority_high</i></button>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Webflow</h6>
                          <span class="text-xs">26 March 2020, at 05:00 AM</span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-dark text-sm font-weight-bold">
                        Pending
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </main>
 
  </body>

  )
}
export default Transaction;



