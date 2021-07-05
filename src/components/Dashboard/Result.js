import React from "react";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({}));

const Result = (props) => {
  const classes = useStyles();
  const paper = (
    <Paper elevation={10} style={{ marginBlock: "20px" }}>
      <div style={{ marginInline: "10px", paddingBlock: "10px" }}>
        Application
        <Button
          variant="outlined"
          style={{
            marginLeft: "890px",
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
        Result
      </Typography>
      {paper}
      {paper}
      {paper}
      {paper}
      {paper}
    </div>
  );
};

export default Result;
