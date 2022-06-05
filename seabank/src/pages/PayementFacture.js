
// IMPORT CONFIG & DEPENDENCIES
import React, {  } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AsideUser from "../components/asideUser/aside";
import Aside from "../components/aside/aside";



const PayementFacture = () =>{
  return (


    <div class="g-sidenav-show  bg-gray-200">
 <Aside/>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    {/* <!-- Navbar -->

    <!-- End Navbar --> */}
    <div class="container-fluid py-4">
      <div class="row min-vh-80">
        <div class="col-12 mx-auto">
          <div class="card mt-4">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h4 class="text-white text-capitalize ps-3">payement Facture</h4>
        
              </div>
            </div>
            <div class="card-body">
              <form role="form" class="text-start">
              <div class="input-group input-group-outline my-3">
                  <label class="form-label">Name of  User</label>
                  <input type="iban-sender" id="iban-sender" class="form-control"/>
                </div>

                <div class="input-group input-group-outline my-3">
                  <label class="form-label">Name of compagny</label>
                  <input type="iban-sender" id="iban-sender" class="form-control"/>
                </div>
                <div class="input-group input-group-outline my-3">
                  <label class="form-label">Bill number</label>
                  <input type="iban-sender" id="iban-sender" class="form-control"/>
                </div>
      
                <div class="input-group input-group-outline mb-3">
                  <label class="form-label">Enter Amount</label>
                  <input type="amount" class="form-control"/>
                </div>
                
               
                <div class="text-center">
                  <button type="button" class="btn bg-gradient-primary w-100 my-4 mb-2">Paye Now</button>
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
export default PayementFacture;
