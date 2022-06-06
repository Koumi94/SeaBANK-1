
// IMPORT CONFIG & DEPENDENCIES
import React, {  } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AsideUser from "../components/asideUser/aside";
import Navbar from "../components/navbar-recherche/navbar";

//import image
import ImageUser from '../../src/assets/img/bruce-mars.jpg'
import Aside from "../components/aside/aside";

const Profile = () =>{
  return (



    <div className="g-sidenav-show bg-gray-200">
  <Aside/>
  <div className="main-content position-relative max-height-vh-100 h-100">
  <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <h6 className="font-weight-bolder mb-0">Profile</h6>
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
  <div className="container-fluid py-4">
    <div className="container-fluid px-2 px-md-4">
      <div className="page-header min-height-300 border-radius-xl mt-4" style={{backgroundImage: `url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)` }}>
        {/* <!-- <span className="mask  bg-gradient-primary  opacity-6"></span> --> */}
      </div>
      <div className="card card-body mx-3 mx-md-4 mt-n6">
        <div className="row gx-4 mb-2">
          <div className="col-auto">
            <div className="avatar avatar-xl position-relative">
              <img src={ImageUser} alt="profile_image" className="w-100 border-radius-lg shadow-sm"/>
            </div>
          </div>
          <div className="col-auto my-auto">
            <div className="h-100">
              <h5 className="mb-1">
                Richard Davis
              </h5>
              <p className="mb-0 font-weight-normal text-sm">
                CEO / Co-Founder
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="container-fluid py-4">
            <div >
              <div className="col-12 mx-auto">
                <div className=" mt-4">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">

                      <div className="card-body p-3">
                        <p className="text-sm">
                          Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                        </p>
                        <hr className="horizontal gray-light my-4"/>
                        <ul className="list-group">
                          <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Full Name:</strong> &nbsp; Alec M. Thompson</li>
                          <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Mobile:</strong> &nbsp; (44) 123 1234 123</li>
                          <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; alecthompson@mail.com</li>
                          <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Location:</strong> &nbsp; USA</li>
                          <li className="list-group-item border-0 ps-0 pb-0">
                            <strong className="text-dark text-sm">Social:</strong> &nbsp;
                            <a className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                              <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                              <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                              <i className="fab fa-instagram fa-lg"></i>
                            </a>
                          </li>
                        </ul>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  </div>

  )
}
export default Profile;

