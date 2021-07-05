import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";

import { Link as LinkR } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Dashboard from "./DashBoard";
import Challenge from "./Challenge";
import Applications from "./Applications";
import Payment from "./Payment";
import Profile from "./Profile";
import Result from "./Result";
const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  // paddingRight: 24, // keep right padding when drawer closed
  color: {
    color: "white",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8px",

    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: "220px",
    width: `calc(100% - 220px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    backgroundColor: "#212936",
    color: "white",
    position: "relative",
    whiteSpace: "nowrap",
    width: 220,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    // padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 220,
  },
}));

const Dashboard1 = (props) => {
  const classes = useStyles();
  const [screen, setScreen] = useState("Dashboard");
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {screen == "Dashboard"
              ? "Dashboard"
              : screen == "Company Profile"
              ? "Profile"
              : screen == "Results"
              ? "Results"
              : screen == "Applications"
              ? "Applications"
              : screen == "Challenges"
              ? "Challenges"
              : "Payment"}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div className={classes.toolbarIcon}>
          <LinkR to="/">
            <img
              src="./assets/icon_white.svg"
              width="30"
              height="30"
              alt="Uppskale logo"
            />
          </LinkR>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => {
              setScreen("Dashboard");
            }}
          >
            <ListItemIcon>
              <DashboardIcon className={classes.color} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setScreen("Company Profile");
            }}
          >
            <ListItemIcon>
              <AccountBoxIcon className={classes.color} />
            </ListItemIcon>
            <ListItemText primary="Company Profile" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setScreen("Results");
            }}
          >
            <ListItemIcon>
              <SpeakerNotesIcon className={classes.color} />
            </ListItemIcon>
            <ListItemText primary="Results" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setScreen("Applications");
            }}
          >
            <ListItemIcon>
              <PeopleIcon className={classes.color} />
            </ListItemIcon>
            <ListItemText primary="Applications" />
          </ListItem>
        </List>
        <Divider style={{ backgroundColor: "white" }} />
        <List>
          <ListSubheader inset className={classes.color}>
            Running
          </ListSubheader>

          <ListItem
            button
            onClick={() => {
              setScreen("Challenges");
            }}
          >
            <ListItemIcon>
              <SettingsIcon className={classes.color} />
            </ListItemIcon>
            <ListItemText primary="Challenges" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setScreen("Payment");
            }}
          >
            <ListItemIcon>
              <AccountBalanceWalletIcon className={classes.color} />
            </ListItemIcon>
            <ListItemText primary="Payment" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {screen == "Dashboard" ? (
            <Dashboard />
          ) : screen == "Company Profile" ? (
            <Profile />
          ) : screen == "Results" ? (
            <Result />
          ) : screen == "Applications" ? (
            <Applications />
          ) : screen == "Challenges" ? (
            <Challenge />
          ) : (
            <Payment />
          )}
        </Container>
      </main>
    </div>
  );
};

export default Dashboard1;
