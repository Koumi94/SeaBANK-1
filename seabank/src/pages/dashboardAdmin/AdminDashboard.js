// IMPORT CONFIG & DEPENDENCIES
import React, {  } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Aside from "../../components/aside/aside";
import Navbar  from "../../components/navbar-recherche/navbar";


const AdminDashboard = () =>{
  return(

    
    <div className="g-sidenav-show  bg-gray-200">
 <Aside/>
  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
   <Navbar/>

   <div className="container-fluid py-4" id="dashboard">
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">User Number</p>
                <h4 className="mb-0">53k</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+55% </span>than lask week</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i className="fas fa-euro-sign"></i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Number Of Bank</p>
                <h4 className="mb-0">2,300</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+3% </span>than lask month</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                <i className="fas fa-lira-sign"></i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Turkish Lira</p>
                <h4 className="mb-0">3,462</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0"><span className="text-danger text-sm font-weight-bolder">-2%</span> than yesterday</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                <i className="fas fa-gbp-sign"></i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Sales</p>
                <h4 className="mb-0">$103,430</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+5% </span>than yesterday</p>
            </div>
          </div>
        </div>
      </div>
     
    </div>

    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-md-12 mt-4">
          <div className="card">
            <div className="card-header pb-0 px-3">
              <h6 className="mb-0">Clients List</h6>
            </div>
            <div className="card-body pt-4 p-3">
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="mb-3 text-sm">Oliver Liam</h6>
                    <span className="mb-2 text-xs">Company Name: <span className="text-dark font-weight-bold ms-sm-2">Viking Burrito</span></span>
                    <span className="mb-2 text-xs">Email Address: <span className="text-dark ms-sm-2 font-weight-bold">oliver@burrito.com</span></span>
                    <span className="text-xs">VAT Number: <span className="text-dark ms-sm-2 font-weight-bold">FRB1235476</span></span>
                  </div>
                  <div className="ms-auto text-end">
                    <a className="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;"><i className="material-icons text-sm me-2">delete</i>Delete</a>
                    <a className="btn btn-link text-dark px-3 mb-0" href="javascript:;"><i className="material-icons text-sm me-2">edit</i>Edit</a>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="mb-3 text-sm">Lucas Harper</h6>
                    <span className="mb-2 text-xs">Company Name: <span className="text-dark font-weight-bold ms-sm-2">Stone Tech Zone</span></span>
                    <span className="mb-2 text-xs">Email Address: <span className="text-dark ms-sm-2 font-weight-bold">lucas@stone-tech.com</span></span>
                    <span className="text-xs">VAT Number: <span className="text-dark ms-sm-2 font-weight-bold">FRB1235476</span></span>
                  </div>
                  <div className="ms-auto text-end">
                    <a className="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;"><i className="material-icons text-sm me-2">delete</i>Delete</a>
                    <a className="btn btn-link text-dark px-3 mb-0" href="javascript:;"><i className="material-icons text-sm me-2">edit</i>Edit</a>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="mb-3 text-sm">Ethan James</h6>
                    <span className="mb-2 text-xs">Company Name: <span className="text-dark font-weight-bold ms-sm-2">Fiber Notion</span></span>
                    <span className="mb-2 text-xs">Email Address: <span className="text-dark ms-sm-2 font-weight-bold">ethan@fiber.com</span></span>
                    <span className="text-xs">VAT Number: <span className="text-dark ms-sm-2 font-weight-bold">FRB1235476</span></span>
                  </div>
                  <div className="ms-auto text-end">
                    <a className="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;"><i className="material-icons text-sm me-2">delete</i>Delete</a>
                    <a className="btn btn-link text-dark px-3 mb-0" href="javascript:;"><i className="material-icons text-sm me-2">edit</i>Edit</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        </div>
    </div>

   
  </main>
  </div> 
  )

};
export default AdminDashboard;




  
    
 
  