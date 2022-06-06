// IMPORT CONFIG & DEPENDENCIES
import React, {  } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ImageaIllustration from '../../src/assets/img/illustrations/illustration-signup.jpg'

const SignUp = () =>{
  return (
<div className=" ">
  
  <main className="main-content  mt-0">
    <section>
      <div className="page-header min-vh-100 ">
        <div className="container ">
          <div className="row mt-7">
            <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
              <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" style={{backgroundImage: `url(${ImageaIllustration})`, backgroundSize: 'cover' }}>
              </div>
              
            </div>
            <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
              <div className="card card-plain">
                <div className="card-header">
                  <h4 className="font-weight-bolder">Register</h4>
                  <p className="mb-0">Enter your email and password to register</p>
                </div>
                <div className="card-body">
                  <form role="form" >
                    
                    
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">Full Name</label>
                      <input type="text" id="register-fName" className="form-control"/>
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" id="register-mail" className="form-control" />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">Phone</label>
                      <input type="tel" id="register-phone" className="form-control" />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" id="register-password" className="form-control"/>
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">repeat Password</label>
                      <input type="password" id="register-repassword" className="form-control"/>
                    </div>

                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button"  className="btn btn-outline-primary" id="register-btn-personel" for="btn-personel">Personel</button>
                      <button type="button"  className="btn btn-outline-primary" id="register-btn-client" for="btn-client">Client</button>
                    </div>

                    <div className="form-check form-check-info text-start ps-0">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
                      <label className="form-check-label" for="flexCheckDefault">
                        I agree the <a href="javascript:;" className="text-dark font-weight-bolder">Terms and Conditions</a>
                      </label>
                    </div>
                    <div className="text-center">
                      <Link to='/login' type="button" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign Up</Link>
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
 
</div>


  )
}
export default SignUp;
