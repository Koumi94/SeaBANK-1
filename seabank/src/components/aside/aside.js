// IMPORT CONFIG & DEPENDENCIES
import React, { } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react";

// import Logo_ct from '../../assets/img/logo-ct.png'


const Aside = ()=>{
    return (

        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <a claclassNamess="navbar-brand m-0" href="  " target="_blank">
            {/* <img src={Logo_ct} class="navbar-brand-img h-100" alt="main_logo"/> */}
            <span className="ms-1 font-weight-bold text-white">Sea Bank</span>
          </a>
        </div>
        <hr className="horizontal light mt-0 mb-2"/>
        <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
          <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white  bg-gradient-primary"  to='/admindashboard'>
              {/* s'il est connecter entant que admin il se dirigera vers le pannel admin  */}
              <div className="text-white active text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons ">dashboard</i>
              </div>
              <span className="nav-link-text ms-1">Dashboard</span>
            </Link>
          </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to='/createaccount'>
                <div className="text-white  text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text ms-1">Create Account</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white  " to='/clientlist'>
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">receipt_long</i>
                </div>
                <span className="nav-link-text ms-1">Client's List</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to='/transfert'>
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">table_view</i>
                </div>
                <span className="nav-link-text ms-1">Transfert</span>
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-white " Link to='/transaction'>
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">receipt_long</i>
              </div>
              <span className="nav-link-text ms-1">Transactions</span>
            </Link>
          </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to='/payementfacture'>
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">receipt_long</i>
                </div>
                <span className="nav-link-text ms-1">Payment Facture</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to='/profile'>
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <span className="nav-link-text ms-1">Profile</span>
              </Link>
            </li>
            
          </ul>
        </div>
        <div className="sidenav-footer position-absolute w-100 bottom-0 ">
          <div className="mx-3">
            <Link className="btn bg-gradient-primary mt-4 w-100" to="/login" type="button">log Out</Link>
          </div>
        </div>
      </aside>
      
      
    )
}
export default Aside;