
// IMPORT CONFIG & DEPENDENCIES
import React, {  } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react";


import "../assets/css/material-dashboard.css?v=3.0.2";
import "./assets/img/apple-icon.png";
  import "./assets/img/favicon.png";
  // <!--     Fonts and icons     -->
import "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700";
  // <!-- Nucleo Icons -->
  import "/dashboard/assets/css/nucleo-icons.css";
  import "/dashboard/assets/css/nucleo-svg.css";
  // <!-- Font Awesome Icons -->
  import "https://kit.fontawesome.com/42d5adcbca.js";
  // <!-- Material Icons -->
  import "https://fonts.googleapis.com/icon?family=Material+Icons+Round";
  // <!-- CSS Files -->
  import "/dashboard/assets/css/material-dashboard.css";
 {/* <!--   Core JS Files   --> */}
 import "../assets/js/core/popper.min.js";
 import "../assets/js/core/bootstrap.min.js";
 import "../assets/js/plugins/perfect-scrollbar.min.js";
 import "../assets/js/plugins/smooth-scrollbar.min.js";
 
const SignIn = () =>{
  return (

<body class="bg-gray-200">
    <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        {/* <!-- Navbar --> */}
        <nav class="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
          <div class="container-fluid ps-2 pe-0">
            <a class="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="dashboard.html">
              Sea BANK
            </a>
          </div>
        </nav>
        {/* <!-- End Navbar --> */}
      </div>
    </div>
  </div>
  <main class="main-content  mt-0">
    <div class="page-header align-items-start min-vh-100" style="background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row mt-7">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
              
                </div>
              </div>
              <div class="card-body">
                <form role="form" class="text-start">
                  <div class="mt-1">
                    <h6 class="mb-0">User Type</h6>
                    <p class="text-sm">Choose between 2 user types.</p>
                  </div>

                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button"  class="btn btn-outline-primary" id="login-btn-personel" for="btn-personel">Personel</button>
                    <button type="button"  class="btn btn-outline-primary" id="login-btn-client" for="btn-client">Client</button>
                  </div>
                  
                  <div class="input-group input-group-outline my-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" id="login-email"/>
                  </div>
                  <div class="input-group input-group-outline mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" id="login-password"/>
                  </div>
                  <div class="form-check form-switch d-flex align-items-center mb-3">
                    <input class="form-check-input" type="checkbox" id="rememberMe"/>
                    <label class="form-check-label mb-0 ms-2" for="rememberMe">Remember me</label>
                  </div>
                  <p class="mt-4 text-sm text-center">
                    <a href="../pages/forgot-password.html" class="text-primary text-gradient font-weight-bold" style="text-decoration:underline">Forgot Password</a>
                  </p>
                  <div class="text-center">
                    <button type="button" class="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                  </div>
                
                </form>
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
export default SignIn;


