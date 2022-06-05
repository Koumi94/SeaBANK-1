// IMPORT CONFIG & DEPENDENCIES
import React, {  } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Aside from "../../components/aside/aside";
import Navbar  from "../../components/navbar-recherche/navbar";


const CreateAccount = () =>{
  return(

    
    <div class="g-sidenav-show  bg-gray-200">
 <Aside/>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
   <Navbar/>

  


    <div class="container-fluid py-4" id="createAccount">

      <div class="row">
        <div class="col-md-12 mt-4">
          <div class="card">
            <div class="col-md-12 mt-4">
              <div class="card card-plain">
                <div class="card-header">
                  <h4 class="font-weight-bolder">New Client</h4>
                  <p class="mb-0">Enter Client's informations</p>
                </div>
                <div class="card-body">
                  
                  <form role="form" >
                    
                    
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label">Full Name</label>
                      <input type="text" id="register-fName" class="form-control"/>
                    </div>
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label">Email</label>
                      <input type="email" id="register-mail" class="form-control" />
                    </div>
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label">Phone</label>
                      <input type="tel" id="register-phone" class="form-control" />
                    </div>
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label">Address</label>
                      <input type="address" id="address" class="form-control"/>
                    </div>
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label">IBAN number</label>
                      <input type="zip" id="zip-code" class="form-control"/>
                    </div>

               
                    <div class="text-center">
                      <button type="button" class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0" id="create-client">Create Account</button>
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




  
    
 
  