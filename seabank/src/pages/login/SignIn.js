
// IMPORT CONFIG & DEPENDENCIES
import React, {  } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react";



const SignIn = () =>{
  return (

<body className="bg-gray-200">
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
    <div className="page-header align-items-start min-vh-100" style={{backgroundImage: `url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)`}}>
      <span className="mask bg-gradient-dark opacity-6"></span>
      <div className="container my-auto">
        <div className="row mt-7">
          <div className="col-lg-4 col-md-8 col-12 mx-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
              
                </div>
              </div>
              <div className="card-body">
                <form role="form" className="text-start">
                  <div className="mt-1">
                    <h6 className="mb-0">User Type</h6>
                    <p className="text-sm">Choose between 2 user types.</p>
                  </div>

                  <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button"  className="btn btn-outline-primary" id="login-btn-personel" for="btn-personel">Personel</button>
                    <button type="button"  className="btn btn-outline-primary" id="login-btn-client" for="btn-client">Client</button>
                  </div>
                  
                  <div className="input-group input-group-outline my-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="login-email"/>
                  </div>
                  <div className="input-group input-group-outline mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="login-password"/>
                  </div>
                  <div className="form-check form-switch d-flex align-items-center mb-3">
                    <input className="form-check-input" type="checkbox" id="rememberMe"/>
                    <label className="form-check-label mb-0 ms-2" for="rememberMe">Remember me</label>
                  </div>
                  <div  className="mt-4 text-sm text-center">
                    <Link to='/forgotpassword' className="text-primary text-gradient font-weight-bold" style={{textDecoration: `underline`}}>Forgot Password</Link>
                  </div>
                  <div className="text-center">
                    <Link to='/admindashboard' type="button" className="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</Link>
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



