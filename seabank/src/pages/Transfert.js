// IMPORT CONFIG & DEPENDENCIES
import React, {  } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



import AsideUser from "../components/asideUser/aside";
import Aside from "../components/aside/aside";

const Transfert = () =>{
  return(




    <div class="g-sidenav-show  bg-gray-200">
   <Aside/>
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
                <h4 class="text-white text-capitalize ps-3">Transfer</h4>
        
              </div>
            </div>
            <div class="card-body">
              <form role="form" class="text-start">
                
                <div class="input-group input-group-outline my-3">
                  <label class="form-label">Iban Sender</label>
                  <input type="iban-sender" id="iban-sender" class="form-control"/>
                </div>
                <div class="input-group input-group-outline my-3">
                  <label class="form-label">Iban Receiver</label>
                  <input type="iban-receiver" id="iban-receiver" class="form-control"/>
                </div>

                <div class="input-group input-group-outline mb-3">
                  <label class="form-label">Enter Amount</label>
                  <input type="amount" class="form-control"/>
                </div>
                <div class="form-check form-switch d-flex align-items-center mb-3">
                  <input class="form-check-input" type="checkbox" id="rememberMe"/>
                  <label class="form-check-label mb-0 ms-2" for="rememberMe">Remember me</label>
                </div>
                <div class="text-center">
                  <button type="button" class="btn bg-gradient-primary w-100 my-4 mb-2">Send Amount</button>
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
}
export default Transfert;






