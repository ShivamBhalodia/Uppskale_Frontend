import React from "react";
import Divider from "@material-ui/core/Divider";

import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

const Payment = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" align="center">
        Payment
      </Typography>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ marginBlock: "30px" }}
      >
        <Grid
          container
          justify="center"
          alignItems="center"
          // spacing={1}

          // lg={9}
          // md={11}
          // sm={12}
        >
          <Grid item xs={12} lg={4} style={{ marginBlock: "10px" }}>
            <div className={classes.container}>
              <div
                className={classes.card}
                style={{
                  width: "14rem",
                  border: "0.5px solid #635f5e",
                  borderRadius: "8px",
                  boxShadow: "20px 20px 22px rgba(0,0,0,0.4)",
                  height: "350px",
                  position: "relative",
                }}
              >
                <div>
                  <Typography variant="h6" align="center">
                    Silver Plan
                  </Typography>
                </div>
                <Divider
                  style={{ backgroundColor: "black", marginInline: "10px" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "4rem",
                  }}
                >
                  <Button variant="outlined">Buy Now</Button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4} style={{ marginBlock: "10px" }}>
            <div className={classes.container}>
              <div
                className={classes.card}
                style={{
                  width: "14rem",
                  border: "0.5px solid #635f5e",
                  boxShadow: "20px 20px 22px rgba(0,0,0,0.4)",
                  borderRadius: "8px",
                  height: "350px",
                  position: "relative",
                }}
              >
                <div>
                  <Typography variant="h6" align="center">
                    Gold Plan
                  </Typography>
                </div>
                <Divider
                  style={{ backgroundColor: "black", marginInline: "10px" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "4rem",
                  }}
                >
                  <Button variant="outlined">Buy Now</Button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4} style={{ marginBlock: "10px" }}>
            <div className={classes.container}>
              <div
                className={classes.card}
                style={{
                  width: "14rem",
                  border: "0.5px solid #635f5e",
                  boxShadow: "20px 20px 22px rgba(0,0,0,0.4)",
                  borderRadius: "8px",
                  height: "350px",
                  position: "relative",
                }}
              >
                <div>
                  <Typography variant="h6" align="center">
                    Premium
                  </Typography>
                </div>
                <Divider
                  style={{ backgroundColor: "black", marginInline: "10px" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "4rem",
                  }}
                >
                  <Button variant="outlined">Buy Now</Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Payment;
