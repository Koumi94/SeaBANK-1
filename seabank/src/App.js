//IMPORT CONFIG & DEPENDENCIES
import React, { useEffect } from "react";
import { Switch,  withRouter, Redirect,Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';




import Accueil from './pages/acceuil/accueil';
import ClientList from  './pages/dashboardAdmin/clientList';
import AdminDashboard from  './pages/dashboardAdmin/adminDashboard';
import CreditAccount from "./pages/dashboardAdmin/creditAccount";
import UserDasboard from "./pages/dashboardUser/Dashboard";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import SignIn from "./pages/login/SignIn";
import ReseatPassword from "./pages/passwordReseat/ReseatPassword";
import PayementFacture from "./pages/PayementFacture";
import Profile from "./pages/Profile";
import Transaction from "./pages/Transactions";
import Transfert from "./pages/Transfert";
import SignUp from "./pages/SignUp";
import CreateAccount from "./pages/createAccount/createAccount";

const App = () => {
  
    
    let route = (
      <Switch>
        <Route path="/acceuil" component={Accueil} />
        <Route path="/clientlist" component={ClientList}/>
        <Route path="/admindashboard" component={AdminDashboard}/>
        <Route path="/creditAccount" component={CreditAccount}/>
        <Route path="/userdashboard" component={UserDasboard}/>
        <Route path="/forgotpassword" component={ForgotPassword}/>
        <Route path="/createaccount" component={CreateAccount}/>
        <Route path="/login" component={SignIn}/>
        <Route path="/registercompte" component={SignUp}/>
        <Route path="/reseatpassword" component={ReseatPassword}/>
        <Route path="/payementfacture" component={PayementFacture}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/transaction" component={Transaction}/>
        <Route path="/transfert" component={Transfert}/>
        
      </Switch>
    )
    return (
      <div>
        {route}
      </div>
  );
}

export default withRouter(App);
