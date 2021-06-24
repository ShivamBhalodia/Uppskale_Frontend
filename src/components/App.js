import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from './Home';
import history from '../history';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Signupoption from './Signup/Signupoption';
import Companydetails from './Enterdetails/Companydetails'
import Ypdetails from './Enterdetails/Ypdetails'

const App = () => {
  return (
    <div className="container-fluid">
      <Router history={history}>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signupoption" exact component={Signupoption} />
          <Route path="/companydetails" exact component={Companydetails} />
          <Route path="/ypdetails" exact component={Ypdetails} />
        </div>
      </Router>
    </div>
  );

}

export default App;
