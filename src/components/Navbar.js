import React, { useState, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import history from "../history";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  menuButton: {},
  drawerOption: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginInline: "25px",
    marginTop: "20px",
    "& a": {
      color: "black",
      display: "flex",
      justifyContent: "center",
      borderBottom: "4px solid white",
      margin: "7px",
      "&:hover": {
        color: "blue",
        borderBottom: "4px solid blue",
      },
    },
    "& .MuiTypography-subtitle1": {
      fontWeight: "bold",
    },
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
      borderBottom: "4px solid rgba(0,0,255, 0)",
      margin: "7px",
      "&:hover": {
        color: "blue",
        borderBottom: "4px solid rgba(0,0,255, 1)",
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
  closeMenuButton: {
    display: "flex",
    alignSelf: "center",
  },
  appBar: {},
}));

const Home = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  useEffect(() => {
    setMobileOpen(false);
  }, [isMobile]);

  const login = () => {
    history.push("login");
  };

  const signupoption = () => {
    history.push("signupoption");
  };
  return (
    <div className={classes.root} style={{ height: "55px" }}>
      <AppBar
        color="transparent"
        elevation={0}
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar style={{ height: "40px" }}>
          <Link to="/">
            <img
              src="./assets/Logo.svg"
              width="70"
              height="70"
              alt="Uppskale logo"
            />
          </Link>
          <div className={classes.appBarOption}>
            {isMobile ? (
              <div style={{ marginRight: "10px" }}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  variant="temporary"
                  anchor="right"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true,
                  }}
                >
                  <IconButton
                    onClick={handleDrawerToggle}
                    className={classes.closeMenuButton}
                  >
                    <CloseIcon />
                  </IconButton>
                  <div className={classes.drawerOption}>
                    <Link to="dashboard" style={{ textDecoration: "none" }}>
                      <Typography variant="subtitle1">Get Started</Typography>
                    </Link>
                    <Link to="dashboard" style={{ textDecoration: "none" }}>
                      <Typography variant="subtitle1">Challenge</Typography>
                    </Link>
                    <Link to="dashboard" style={{ textDecoration: "none" }}>
                      <Typography variant="subtitle1">Pricing</Typography>
                    </Link>
                    <Button
                      onClick={signupoption}
                      variant="outlined"
                      style={{ marginTop: "12px", color: "blue" }}
                    >
                      <Typography variant="subtitle1">Sign Up</Typography>
                    </Button>
                    <Button
                      onClick={login}
                      variant="outlined"
                      style={{ marginTop: "18px", color: "blue" }}
                    >
                      <Typography variant="subtitle1">Login</Typography>
                    </Button>
                  </div>
                </Drawer>
              </div>
            ) : (
              <div className={classes.headerOption}>
                <Link to="dashboard" style={{ textDecoration: "none" }}>
                  <Typography variant="subtitle1">Get Started</Typography>
                </Link>
                <Link to="dashboard" style={{ textDecoration: "none" }}>
                  <Typography variant="subtitle1">Challenge</Typography>
                </Link>
                <Link to="dashboard" style={{ textDecoration: "none" }}>
                  <Typography variant="subtitle1">Pricing</Typography>
                </Link>
                <Button
                  onClick={signupoption}
                  // component={Link}
                  // to="signupoption"
                  variant="outlined"
                  style={{ marginLeft: "5px", color: "blue" }}
                >
                  <Typography variant="subtitle1">Sign Up</Typography>
                </Button>

                <Button
                  onClick={login}
                  variant="outlined"
                  style={{ marginLeft: "12px", color: "blue" }}
                >
                  {/* login */}
                  <Typography variant="subtitle1">Login</Typography>
                </Button>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar}></div>
    </div>
  );
};

export default Home;
