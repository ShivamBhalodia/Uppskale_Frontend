import React from "react";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles((theme) => ({}));

const Profile = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" align="center">
        Company Profile
      </Typography>
      <Typography variant="subtitle1" align="start">
        Some info about company
      </Typography>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={3}
        style={{ marginBlock: "15px" }}
      >
        <Grid item xs={12} md={8}>
          <Paper
            elevation={10}
            style={{
              height: "410px",
              width: "100%",
              display: "relative",
              borderRadius: "8px",
            }}
          >
            <center>
              <Typography
                variant="h5"
                align="start"
                style={{ paddingTop: "5px" }}
              >
                Update Company Profile
              </Typography>
              <Divider style={{ marginBlock: "5px", marginInline: "10px" }} />
              <Button
                variant="outlined"
                style={{ width: "60%", display: "absolute", bottom: "-310px" }}
              >
                Update
              </Button>
            </center>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={10}
            style={{ height: "410px", width: "100%", borderRadius: "8px" }}
          >
            <center>
              <AccountCircleIcon style={{ fontSize: "150px" }} />

              <Typography variant="h5" align="start">
                Company Profile
              </Typography>
              <Typography variant="h6" align="start">
                Some info about company
              </Typography>
            </center>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
