//IMPORT CONFIG & DEPENDENCIES
import React, { useEffect } from "react";
import { Switch,  withRouter, Redirect } from 'react-router-dom';
import {Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';




import Accueil from './pages/acceuil/accueil';

const App = () => {
  
    
    let route = (
      <Switch>
        <Route path="/index" component={Accueil} />
        
        <Redirect to='/index' />
      </Switch>
    )
    return (
      <div>
        {route}
      </div>
  );
}

export default withRouter(App);
