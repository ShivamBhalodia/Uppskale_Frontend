import React, { useEffect } from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import Login from "./Login/Login";
import Signup from "./Signup/Signup.js";
import Signupoption from "./Signup/Signupoption";
import Companydetails from "./Enterdetails/Companydetails";
import Ypdetails from "./Enterdetails/Ypdetails";
import { connect } from "react-redux";
import { screen } from "../actions/authAction";
import Jd from "./Jd";
import Home from "./Home";
import Dashboard1 from "./Dashboard/Dashboard1";
const App = (props) => {
  useEffect(() => {
    if (window.innerWidth < 576) {
      //xs
      props.screen(1);
    } else if (window.innerWidth < 768) {
      //sm
      props.screen(2);
    } else if (window.innerWidth < 992) {
      //md
      props.screen(3);
    } else if (window.innerWidth < 1200) {
      //lg
      props.screen(4);
    } else {
      //xl
      props.screen(5);
    }

    function handleResize() {
      if (window.innerWidth < 576) {
        //xs
        props.screen(1);
      } else if (window.innerWidth < 768) {
        //sm
        props.screen(2);
      } else if (window.innerWidth < 992) {
        //md
        props.screen(3);
      } else if (window.innerWidth < 1200) {
        //lg
        props.screen(4);
      } else {
        //xl
        props.screen(5);
      }
    }
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });
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
          <Route path="/jd" exact component={Jd} />
          <Route path="/dashboard" exact component={Dashboard1} />
        </div>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    screenSize: state.screenSize,
  };
};

export default connect(mapStateToProps, { screen })(App);
