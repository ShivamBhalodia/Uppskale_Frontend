import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Jd from "../Jd";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({}));

const Challenge = (props) => {
  const classes = useStyles();
  const paper = (
    <Grid item>
      <Paper
        elevation={10}
        style={{
          margin: "20px",
          width: "200px",
          height: "150px",
          borderRadius: "8px",
        }}
      ></Paper>
    </Grid>
  );
  return (
    <div>
      <Typography variant="h5" align="center">
        Challenges
      </Typography>
      <Jd />
      <Grid container justify="center" alignItems="center">
        <Grid
          container
          justify="center"
          alignItems="center"
          // spacing={1}
        >
          {paper}
          {paper}
          {paper}
          {paper}
          {paper}
          {paper}
          {paper}
          {paper}
        </Grid>
      </Grid>
    </div>
  );
};

export default Challenge;
