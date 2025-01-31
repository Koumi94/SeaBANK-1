
// IMPORT CONFIG & DEPENDENCIES
import React, {  } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AsideUser from "../components/asideUser/aside";
import Aside from "../components/aside/aside";



const Transaction = () =>{
  return(


    <body className="g-sidenav-show  bg-gray-200">
      <Aside/>
  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    {/* <!-- Navbar --> */}
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <h6 className="font-weight-bolder mb-0">Transactions</h6>
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
                <h4 className="text-white text-capitalize ps-3">Transactions</h4>
              </div>
            </div>
            <div className="col-12 mx-auto">
              <div className="card mt-4">
                <div className="card-header pb-0 px-3">
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="mb-0">Your Transaction's</h6>
                    </div>
                    <div className="col-md-6 d-flex justify-content-start justify-content-md-end align-items-center">
                      <i className="material-icons me-2 text-lg">date_range</i>
                      <small>23 - 30 March 2020</small>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-4 p-3">
                  <h6 className="text-uppercase text-body text-xs font-weight-bolder mb-3">Newest</h6>
                  <ul className="list-group">
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex align-items-center">
                        <button className="btn btn-icon-only btn-rounded btn-outline-danger mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i className="material-icons text-lg">expand_more</i></button>
                        <div className="d-flex flex-column">
                          <h6 className="mb-1 text-dark text-sm">Netflix</h6>
                          <span className="text-xs">27 March 2020, at 12:30 PM</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">
                        - $ 2,500
                      </div>
                    </li>
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex align-items-center">
                        <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i className="material-icons text-lg">expand_less</i></button>
                        <div className="d-flex flex-column">
                          <h6 className="mb-1 text-dark text-sm">Apple</h6>
                          <span className="text-xs">27 March 2020, at 04:30 AM</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                        + $ 2,000
                      </div>
                    </li>
                  </ul>
                  <h6 className="text-uppercase text-body text-xs font-weight-bolder my-3">Yesterday</h6>
                  <ul className="list-group">
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex align-items-center">
                        <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i className="material-icons text-lg">expand_less</i></button>
                        <div className="d-flex flex-column">
                          <h6 className="mb-1 text-dark text-sm">Stripe</h6>
                          <span className="text-xs">26 March 2020, at 13:45 PM</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                        + $ 750
                      </div>
                    </li>
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex align-items-center">
                        <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i className="material-icons text-lg">expand_less</i></button>
                        <div className="d-flex flex-column">
                          <h6 className="mb-1 text-dark text-sm">HubSpot</h6>
                          <span className="text-xs">26 March 2020, at 12:30 PM</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                        + $ 1,000
                      </div>
                    </li>
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex align-items-center">
                        <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i className="material-icons text-lg">expand_less</i></button>
                        <div className="d-flex flex-column">
                          <h6 className="mb-1 text-dark text-sm">Creative Tim</h6>
                          <span className="text-xs">26 March 2020, at 08:30 AM</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                        + $ 2,500
                      </div>
                    </li>
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex align-items-center">
                        <button className="btn btn-icon-only btn-rounded btn-outline-dark mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i className="material-icons text-lg">priority_high</i></button>
                        <div className="d-flex flex-column">
                          <h6 className="mb-1 text-dark text-sm">Webflow</h6>
                          <span className="text-xs">26 March 2020, at 05:00 AM</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center text-dark text-sm font-weight-bold">
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



