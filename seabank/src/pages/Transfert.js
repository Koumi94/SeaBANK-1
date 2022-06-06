// IMPORT CONFIG & DEPENDENCIES
import React, {  } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



import AsideUser from "../components/asideUser/aside";
import Aside from "../components/aside/aside";

const Transfert = () =>{
  return(




    <div className="g-sidenav-show  bg-gray-200">
   <Aside/>
  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    {/* <!-- Navbar --> */}
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <h6 className="font-weight-bolder mb-0">Transfer</h6>
        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group input-group-outline">
              <label className="form-label">Type here...</label>
              <input type="text" className="form-control"/>
            </div>
          </div>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>
            
        
            
          </ul>
        </div>
      </div>
    </nav>
    {/* <!-- End Navbar --> */}
    <div className="container-fluid py-4">
      <div className="row min-vh-80">
        <div className="col-12 mx-auto">
          <div className="card mt-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h4 className="text-white text-capitalize ps-3">Transfer</h4>
        
              </div>
            </div>
            <div className="card-body">
              <form role="form" className="text-start">
                
                <div className="input-group input-group-outline my-3">
                  <label className="form-label">Iban Sender</label>
                  <input type="iban-sender" id="iban-sender" className="form-control"/>
                </div>
                <div className="input-group input-group-outline my-3">
                  <label className="form-label">Iban Receiver</label>
                  <input type="iban-receiver" id="iban-receiver" className="form-control"/>
                </div>

                <div className="input-group input-group-outline mb-3">
                  <label className="form-label">Enter Amount</label>
                  <input type="amount" className="form-control"/>
                </div>
                <div className="form-check form-switch d-flex align-items-center mb-3">
                  <input className="form-check-input" type="checkbox" id="rememberMe"/>
                  <label className="form-check-label mb-0 ms-2" for="rememberMe">Remember me</label>
                </div>
                <div className="text-center">
                  <button type="button" className="btn bg-gradient-primary w-100 my-4 mb-2">Send Amount</button>
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






