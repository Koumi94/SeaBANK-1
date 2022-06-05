
// IMPORT CONFIG & DEPENDENCIES
import React, {  } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react";


import "/seabank/src/assets/css/material-dashboard.css?v=3.0.2";
import "./assets/img/apple-icon.png";
  import "./assets/img/favicon.png";
  // <!--     Fonts and icons     -->
import "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700";
  // <!-- Nucleo Icons -->
  import "/seabank/src/assets/css/nucleo-icons.css";
  
  import "/seabank/src/assets/css/ucleo-svg.css";
  // <!-- Font Awesome Icons -->
  import "https://kit.fontawesome.com/42d5adcbca.js";
  // <!-- Material Icons -->
  import "https://fonts.googleapis.com/icon?family=Material+Icons+Round";
  // <!-- CSS Files -->
  import "/seabank/src/assets/css/material-dashboard.css";
//dd
const ForgotPassword = () =>{
  return (



  <div class="bg-gray-200">
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        {/* <!-- Navbar --> */}
        <nav class="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
          <div class="container-fluid ps-2 pe-0">
            <a class="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="/index.html">
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
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
              <div class="card-body">
                <form role="form" class="text-start">
                  
                  <div class="input-group input-group-outline my-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" id="forgot-password"/>
                  </div>
     
                  <div class="text-center">
                    <button type="button" class="btn bg-gradient-primary w-100 my-4 mb-2">Send to email</button>
                  </div>
                
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

  
  )
};
export default ForgotPassword;



