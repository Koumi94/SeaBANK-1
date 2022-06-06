// IMPORT CONFIG & DEPENDENCIES
import React, {  } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Aside from "../../components/aside/aside";
import Navbar  from "../../components/navbar-recherche/navbar";


const CreateAccount = () =>{
  return(

    
    <div className="g-sidenav-show  bg-gray-200">
 <Aside/>
  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
   <Navbar/>

  


    <div className="container-fluid py-4" id="createAccount">

      <div className="row">
        <div className="col-md-12 mt-4">
          <div className="card">
            <div className="col-md-12 mt-4">
              <div className="card card-plain">
                <div className="card-header">
                  <h4 className="font-weight-bolder">New Client</h4>
                  <p className="mb-0">Enter Client's informations</p>
                </div>
                <div className="card-body">
                  
                  <form role="form" >
                    
                  <div className="input-group input-group-outline mb-3">
                      <label className="form-label">ID Number</label>
                      <input type="Number" id="register-fName" className="form-control"/>
                    </div>
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
                      <label className="form-label">Address</label>
                      <input type="address" id="address" className="form-control"/>
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">IBAN number</label>
                      <input type="zip" id="zip-code" className="form-control"/>
                    </div>

               
                    <div className="text-center">
                      <button type="button" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0" id="create-client">Create Account</button>
                    </div>
                  </form>
                </div>
              
              </div>
            </div>
            
          </div>
        </div>
        </div>
     
    </div>
  </main>
  </div> 
  )

};
export default CreateAccount;




  
    
 
  