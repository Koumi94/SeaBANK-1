
// IMPORT CONFIG & DEPENDENCIES
import React, {  } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import "../assets/img/apple-icon.png";

<title>
  Sea BANK
</title>
{/* <!--     Fonts and icons     --> */}
import "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700";
{/* <!-- Nucleo Icons --> */}
import "/dashboard/assets/css/nucleo-icons.css";
import "/dashboard/assets/css/nucleo-svg.css";
import "/dashboard/assets/css/material-dashboard.css";
<script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
<link rel="icon" type="image/png" href="../assets/img/favicon.png"></link>
// <!-- Material Icons -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
<!-- CSS Files -->
//</link>

const CreditAccount = () =>{
  return (


    <body class="g-sidenav-show  bg-gray-200">
  <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
    <div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand m-0" href="  " target="_blank">
        <img src="/dashboard/assets/img/apple-icon.png" class="navbar-brand-img h-100" alt="main_logo"/>
        <span class="ms-1 font-weight-bold text-white">Sea Bank</span>
      </a>
    </div>
    <hr class="horizontal light mt-0 mb-2"/>
    <div class="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white " href="../admin-dashboard.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">dashboard</i>
            </div>
            <span class="nav-link-text ms-1">Create Account</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="../admin-dashboard.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">dashboard</i>
            </div>
            <span class="nav-link-text ms-1">Credit Account</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="./clientlist.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">receipt_long</i>
            </div>
            <span class="nav-link-text ms-1">Client's List</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white  " href="./admin-transfer.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">table_view</i>
            </div>
            <span class="nav-link-text ms-1">transfer</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="./payment-facture.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">receipt_long</i>
            </div>
            <span class="nav-link-text ms-1">Payment Facture</span>
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
        <a class="btn bg-gradient-primary mt-4 w-100" href="./pages/sign-in.html" type="button">log Out</a>
      </div>
    </div>
  </aside>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    {/* <!-- Navbar --> */}
    <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div class="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <h6 class="font-weight-bolder mb-0">Transfer</h6>
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
                <h4 class="text-white text-capitalize ps-3">Credit Account</h4>
        
              </div>
            </div>
            <div class="card-body">
              <form role="form" class="text-start">
                
                <div class="input-group input-group-outline my-3">
                  <label class="form-label">Account number</label>
                  <input type="iban-sender" id="iban-sender" class="form-control"/>
                </div>

                <div class="input-group input-group-outline mb-3">
                  <label class="form-label">Enter Amount</label>
                  <input type="amount" class="form-control"/>
                </div>

                <div class="input-group input-group-outline mb-3">
                  <label class="form-label">Description</label>
                  <input type="text" class="form-control"/>
                </div>
                
                <div class="text-center">
                  <button type="button" class="btn bg-gradient-primary w-100 my-4 mb-2">Credit Account</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
     
      
    </div>
  </main>
  
  <script src="../assets/js/core/popper.min.js"></script>
  <script src="../assets/js/core/bootstrap.min.js"></script>
  <script src="../assets/js/plugins/perfect-scrollbar.min.js"></script>
  <script src="../assets/js/plugins/smooth-scrollbar.min.js"></script>
  
  
</body>
  )
}
export default CreditAccount;




