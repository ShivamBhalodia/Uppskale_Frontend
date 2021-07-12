<<<<<<< HEAD
import React from 'react';
import { Card } from "react-bootstrap";
import { connect } from 'react-redux';
import {statusYp,statusCompany} from '../../actions/statusAction'

const Signupoptioncard = (props) => {

  let pic;
  props.text=="yp"?pic="./assets/yp.svg":pic="./assets/company.svg";

  const change=()=>{
    if(props.text=="yp")
    props.statusYp();
    else
    props.statusCompany();
  }
  return (
    <div >
      <Card onClick={change} style={{ width: "12rem", border: `2px solid #${props.isSelected?"42a4f5":"989898"}` }}>
        <img
          src={props.isSelected?"./assets/filled_tick.svg":"./assets/emptytick.svg"}
          width="12"
          height="12"
          className="ml-auto mt-2 mr-2"
          alt="Card icon"
        />
        <Card.Img
          variant="top"
          src={pic}
          width="150"
          height="150"
          style={{opacity:props.isSelected?"1":"0.5"}}
          className="mt-1"
        />
        <Card.Title style={{ color: `#${props.isSelected?"000000":"989898"}`,marginTop:`${props.text=="yp"?"":"17px"}`,marginBottom:`${props.text=="yp"?"":"17px"}`}}>
          <center>
           {props.text=="yp"?(<div>Young<br />Proffesional</div>):<div>Company<br/></div>}
          </center>
        </Card.Title>
      </Card>
    </div>

  );

}

const mapStateToProps = (state,ownProps) => {
  const check=ownProps.text=="yp"?"1":"0";
  
  return {
    isSelected:check=="1" ? state.status.isSelectedYp: state.status.isSelectedCompany
  };
};
export default connect(
  mapStateToProps,
  { statusYp,statusCompany }
)(Signupoptioncard);
=======
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { statusYp, statusCompany } from "../../actions/statusAction";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {},
  cardIcon: {
    marginTop: "4px",
    float: "right",
    marginRight: "8px",
  },
}));

const Signupoptioncard = (props) => {
  const classes = useStyles();

  let pic;
  props.text === "yp"
    ? (pic = "./assets/yp.svg")
    : (pic = "./assets/company.svg");

  const change = () => {
    if (props.text === "yp") props.statusYp();
    else props.statusCompany();
  };
  return (
    <div className={classes.container}>
      <div
        className={classes.card}
        onClick={change}
        style={{
          width: "12rem",
          border: `2px solid #${props.isSelected ? "42a4f5" : "989898"}`,
          borderRadius: "8px",
        }}
      >
        <div className={classes.cardIcon}>
          <img
            src={
              props.isSelected
                ? "./assets/filled_tick.svg"
                : "./assets/emptytick.svg"
            }
            width="12"
            height="12"
            alt="Card icon"
          />
        </div>
        <div>
          <center>
            <img
              src={pic}
              width="150"
              height="150"
              alt="Card image"
              style={{
                opacity: props.isSelected ? "1" : "0.5",
                marginTop: "20px",
                marginLeft: "17px",
              }}
            />
          </center>
        </div>
        <div
          style={{
            color: `#${props.isSelected ? "000000" : "989898"}`,
            marginTop: `${props.text === "yp" ? "" : "12px"}`,
            marginBottom: `${props.text === "yp" ? "" : "12px"}`,
            paddingBlock: "10px",
          }}
        >
          <center>
            {props.text === "yp" ? (
              <div>
                <b>
                  Young
                  <br />
                  Proffesional
                </b>
              </div>
            ) : (
              <div>
                <b>Company</b>
                <br />
              </div>
            )}
          </center>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const check = ownProps.text === "yp" ? "1" : "0";

  return {
    isSelected:
      check === "1"
        ? state.status.isSelectedYp
        : state.status.isSelectedCompany,
  };
};
export default connect(mapStateToProps, { statusYp, statusCompany })(
  Signupoptioncard
);
>>>>>>> 221b84f1509a26e946bcb591c22d3c038670249d
