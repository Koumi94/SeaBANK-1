
// IMPORT CONFIG & DEPENDENCIES
import React, {  } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AsideUser from "../components/asideUser/aside";
import Aside from "../components/aside/aside";



const PayementFacture = () =>{
  return (


    <div className="g-sidenav-show  bg-gray-200">
 <Aside/>
  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    {/* <!-- Navbar -->

    <!-- End Navbar --> */}
    <div className="container-fluid py-4">
      <div className="row min-vh-80">
        <div className="col-12 mx-auto">
          <div className="card mt-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h4 className="text-white text-capitalize ps-3">payement Facture</h4>
        
              </div>
            </div>
            <div className="card-body">
              <form role="form" className="text-start">
              <div className="input-group input-group-outline my-3">
                  <label className="form-label">Name of  User</label>
                  <input type="iban-sender" id="iban-sender" className="form-control"/>
                </div>

                <div className="input-group input-group-outline my-3">
                  <label className="form-label">Name of compagny</label>
                  <input type="iban-sender" id="iban-sender" className="form-control"/>
                </div>
                <div className="input-group input-group-outline my-3">
                  <label className="form-label">Bill number</label>
                  <input type="iban-sender" id="iban-sender" className="form-control"/>
                </div>
      
                <div className="input-group input-group-outline mb-3">
                  <label className="form-label">Enter Amount</label>
                  <input type="amount" className="form-control"/>
                </div>
                
               
                <div className="text-center">
                  <button type="button" className="btn bg-gradient-primary w-100 my-4 mb-2">Paye Now</button>
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
