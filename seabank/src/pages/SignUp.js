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

const SignUp = () =>{
  return (
<body class=" ">
  
  <main class="main-content  mt-0">
    <section>
      <div class="page-header min-vh-100 ">
        <div class="container ">
          <div class="row mt-7">
            <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
              <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" style="background-image: url('../assets/img/illustrations/illustration-signup.jpg'); background-size: cover;">
              </div>
            </div>
            <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
              <div class="card card-plain">
                <div class="card-header">
                  <h4 class="font-weight-bolder">Register</h4>
                  <p class="mb-0">Enter your email and password to register</p>
                </div>
                <div class="card-body">
                  <form role="form" >
                    
                    
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label">Full Name</label>
                      <input type="text" id="register-fName" class="form-control">
                    </div>
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label">Email</label>
                      <input type="email" id="register-mail" class="form-control" >
                    </div>
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label">Phone</label>
                      <input type="tel" id="register-phone" class="form-control" >
                    </div>
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label">Password</label>
                      <input type="password" id="register-password" class="form-control">
                    </div>
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label">repeat Password</label>
                      <input type="password" id="register-repassword" class="form-control">
                    </div>

                    <div class="btn-group" role="group" aria-label="Basic example">
                      <button type="button"  class="btn btn-outline-primary" id="register-btn-personel" for="btn-personel">Personel</button>
                      <button type="button"  class="btn btn-outline-primary" id="register-btn-client" for="btn-client">Client</button>
                    </div>

                    <div class="form-check form-check-info text-start ps-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked>
                      <label class="form-check-label" for="flexCheckDefault">
                        I agree the <a href="javascript:;" class="text-dark font-weight-bolder">Terms and Conditions</a>
                      </label>
                    </div>
                    <div class="text-center">
                      <button type="button" class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign Up</button>
                    </div>
                  </form>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
 
</body>


  )
}
export default SignUp;