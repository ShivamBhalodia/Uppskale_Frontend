import React from "react";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({}));

const Dashboard1 = (props) => {
  const classes = useStyles();
  const paper = (text) => (
    <Grid item>
      <Paper
        elevation={10}
        style={{
          margin: "20px",
          width: "200px",
          height: "150px",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", bottom: "10px", left: "10px" }}>
          <Typography variant="h3" align="center">
            X+
          </Typography>
          {text}
        </div>
      </Paper>
    </Grid>
  );
  const card = (
    <Paper elevation={10} style={{ marginBlock: "20px" }}>
      <div style={{ marginInline: "10px", paddingBlock: "10px" }}>
        Business executive challenge
        <Button
          variant="outlined"
          style={{
            marginLeft: "745px",
          }}
        >
          Accept
        </Button>
      </div>
    </Paper>
  );
  return (
    <div>
      <Typography variant="h5" align="center">
        Company Dashboard
      </Typography>
      <Grid container justify="center" alignItems="center">
        <Grid
          container
          justify="center"
          alignItems="center"
          // spacing={1}
        >
          {paper("New Applications")}
          {paper("Leads")}
          {paper("Accepted Challenge")}
        </Grid>
      </Grid>
      <Typography variant="h5" align="start" style={{ marginTop: "20px" }}>
        Important Updates
      </Typography>
      {card}
      {card}
      {card}
      {card}
      {card}
      {card}
    </div>
  );
};

export default Dashboard1;
