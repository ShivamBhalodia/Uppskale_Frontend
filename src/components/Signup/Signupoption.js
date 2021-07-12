import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Navigationbar from "../Navigationbar";
import Signupoptioncard from "./Signupoptioncard";
import { connect } from "react-redux";
import history from "../../history.js";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
const Signupoption = (props) => {
  const [check, setCheck] = useState(false);

  const check1 = () => {
    if (props.isSelectedCompany === false && props.isSelectedYp === false)
      setCheck(true);
    else {
      setCheck(false);
      if (props.isSelectedCompany === true)
        localStorage.setItem("role", "company");
      else localStorage.setItem("role", "yp");
      history.push("signUp");
    }
  };

  return (
    <div>
      <Navigationbar text="Sign In" path="login" />
      <hr style={{ border: "1px solid blue", marginBlock: "-2px" }} />
      <Grid container justify="center" alignItems="center">
        <Grid
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          style={{ paddingInline: "10px" }}
        >
          <Grid
            item
            xs={12}
            style={{ marginTop: "70px" }}
            // style={{ backgroundColor: "black" }}
          >
            <center>
              <Typography variant="h5">Welcome to Uppskale.</Typography>
            </center>
          </Grid>

          <Grid
            item
            xs={12}
            style={{ marginTop: "1px" }}
            // style={{ backgroundColor: "black" }}
          >
            <center>
              <Typography variant="h3">Choose your Role</Typography>
            </center>
          </Grid>

          {check ? (
            <h4 style={{ color: "#f22e2e" }}>
              <center>
                <u>
                  <Typography variant="h6">
                    Please choose one role to continue!!!
                  </Typography>
                </u>
              </center>
            </h4>
          ) : null}

          <Grid
            container
            justify="center"
            alignItems="center"
            spacing={3}
            style={{ marginBlock: "3px" }}
          >
            <Grid item>
              <Signupoptioncard text="yp" />
            </Grid>

            <Grid item>
              <Signupoptioncard text="company" />
            </Grid>
          </Grid>
          <Grid item xs={10} sm={7}>
            <Button
              onClick={check1}
              variant="contained"
              size="large"
              style={{
                marginBlock: "1px",
                backgroundColor: "blue",
                color: "white",

                width: "100%",
              }}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSelectedYp: state.status.isSelectedYp,
    isSelectedCompany: state.status.isSelectedCompany,
    screenSize: state.screen.screenSize,
  };
};
export default connect(mapStateToProps, null)(Signupoption);
