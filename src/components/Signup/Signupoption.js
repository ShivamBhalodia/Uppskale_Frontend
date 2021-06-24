import React,{useState,useEffect} from "react";
import Navigationbar from '../Navigationbar';
import Signupoptioncard from './Signupoptioncard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import history from '../../history.js';

const Signupoption = (props) => {

  const [check, setCount] = useState(false);
  
  const check1=()=>{
    if(props.isSelectedCompany==false && props.isSelectedYp==false)
    setCount(true);
    else
    {
      setCount(false);
      history.push('signUp');
    }
  }

  return (
    <div>
      <Navigationbar text="Sign In" />
      <Container fluid className="mt-5" >
      <Row>
          <Col align="center"><h4>Welcome to Uppskale.</h4></Col>
        </Row>
        <Row>
          <Col align="center"><h1>Choose your Role</h1></Col>
        </Row>
        {check?(<Row>
                    <Col align="center" ><h4 style={{color:"#f22e2e"}}><u>Please choose one role to continue!!!</u></h4></Col>
                </Row>):null}
        <div class="row justify-content-center mt-3 ">
          <div className="col-sm-6 d-flex justify-content-end" >
            <Signupoptioncard  text="yp" />
          </div>
          <div className="col-sm-6 d-flex justify-content-start">
            <Signupoptioncard text="company" />
          </div>
        </div>
        <Row>
          <Col md={{ span: 4, offset: 4 }} className="mt-4">
            <Button onClick={check1} variant="primary" size="lg" block>
              Continue
                    </Button></Col>
        </Row>

      </Container>


    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSelectedYp:state.status.isSelectedYp,
    isSelectedCompany:state.status.isSelectedCompany
  };
};
export default connect(
  mapStateToProps,
  null
)(Signupoption);
