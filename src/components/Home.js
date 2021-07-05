import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";

import history from "../history";

const useStyles = makeStyles((theme) => ({}));

const Home = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <hr style={{ border: "1px solid blue", marginBlock: "0px" }} />
    </div>
  );
};

export default Home;
