import React from "react";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

import history from "../history";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  headerOption: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    "& a": {
      color: "black",
      height: "90%",
      display: "flex",
      alignItems: "center",
      borderBottom: "4px solid rgba(0,128,0, 0)",
      margin: "7px",
      "&:hover": {
        color: "green",
        borderBottom: "4px solid rgba(0,128,0, 1)",
      },
    },
    "& .MuiTypography-subtitle1": {
      fontWeight: "bold",
    },
  },
  appBarOption: {
    display: "flex",
    marginLeft: "auto",
    height: "100%",
  },

  appBar: {},
}));

const Navigationbar = (props) => {
  const classes = useStyles();
  const path = () => {
    history.push(`${props.path}`);
  };

  return (
    <div className={classes.root} style={{ height: "55px" }}>
      <AppBar
        color="transparent"
        elevation={0}
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <Link to="/">
            <img
              src="./assets/icon.svg"
              width="30"
              height="30"
              alt="Uppskale logo"
            />
          </Link>
          <div className={classes.appBarOption}>
            <div className={classes.headerOption}>
              <Button
                onClick={path}
                variant="outlined"
                style={{ color: "blue" }}
              >
                <Typography variant="subtitle1">{props.text}</Typography>
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar}></div>
    </div>
  );
};

export default Navigationbar;
