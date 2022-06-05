
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

const PayementFacture = () =>{
  return (


    <body class="g-sidenav-show  bg-gray-200">
  <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
    <div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand m-0" href=" " target="_blank">
        <img src="/dashboard/assets/img/apple-icon.png" class="navbar-brand-img h-100" alt="main_logo"/>
        <span class="ms-1 font-weight-bold text-white">Sea Bank</span>
      </a>
    </div>
    <hr class="horizontal light mt-0 mb-2"/>
    <div class="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white" href="../dashboard.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">dashboard</i>
            </div>
            <span class="nav-link-text ms-1">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="./Transfer.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">table_view</i>
            </div>
            <span class="nav-link-text ms-1">transfer</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="./transactions.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">receipt_long</i>
            </div>
            <span class="nav-link-text ms-1">Transactions</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="./payementFacture.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">table_view</i>
            </div>
            <span class="nav-link-text ms-1">Payment</span>
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
    {/* <!-- Navbar -->

    <!-- End Navbar --> */}
    <div class="container-fluid py-4">
      <div class="row min-vh-80">
        <div class="col-12 mx-auto">
          <div class="card mt-4">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h4 class="text-white text-capitalize ps-3">payement Facture</h4>
        
              </div>
            </div>
            <div class="card-body">
              <form role="form" class="text-start">
                
                <div class="input-group input-group-outline my-3">
                  <label class="form-label">Name of compagny</label>
                  <input type="iban-sender" id="iban-sender" class="form-control"/>
                </div>
                <div class="input-group input-group-outline my-3">
                  <label class="form-label">Bill number</label>
                  <input type="iban-sender" id="iban-sender" class="form-control"/>
                </div>
      
                <div class="input-group input-group-outline mb-3">
                  <label class="form-label">Enter Amount</label>
                  <input type="amount" class="form-control"/>
                </div>
                
               
                <div class="text-center">
                  <button type="button" class="btn bg-gradient-primary w-100 my-4 mb-2">Paye Now</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
     
      
    </div>
  </main>
 
</body>


  )
}
export default PayementFacture;
