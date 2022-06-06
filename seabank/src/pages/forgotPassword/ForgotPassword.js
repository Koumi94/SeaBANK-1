
// IMPORT CONFIG & DEPENDENCIES
import React, {  } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react";


const ForgotPassword = () =>{
  return (



  <div className="bg-gray-200">
  <div className="container position-sticky z-index-sticky top-0">
    <div className="row">
      <div className="col-12">
        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
          <div className="container-fluid ps-2 pe-0">
            <Link className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " to='/acceuil'>
              Sea BANK
            </Link>
          </div>
        </nav>
        {/* <!-- End Navbar --> */}
      </div>
    </div>
  </div>
  <main className="main-content  mt-0">
    <div className="page-header align-items-start min-vh-100" style={{backgroundImage: `url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)`}} >
      <span className="mask bg-gradient-dark opacity-6"></span>
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-12 mx-auto">
              <div className="card-body">
                <form role="form" className="text-start">
                  
                  <div className="input-group input-group-outline my-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="forgot-password"/>
                  </div>
     
                  <div className="text-center">
                    <button type="button" className="btn bg-gradient-primary w-100 my-4 mb-2">Send to email</button>
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



