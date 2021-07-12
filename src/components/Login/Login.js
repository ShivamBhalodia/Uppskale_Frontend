<<<<<<< HEAD
import React from 'react';
import Navigationbar from '../Navigationbar';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LogoGoogle, LogoApple } from 'react-ionicons';
import { useFormik } from 'formik';
import {signIn} from '../../actions/authAction';

const Login = (props) => {
    const validate = values => {
        const errors = {};

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 6) {
            errors.password = 'Password length must be greater then 6 ';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            radio: false,
        },
        validate,
        onSubmit: values => {
            props.signIn(values);
            alert(JSON.stringify(values));
        },
    });
    return (
        <div>
            <Navigationbar text="Join Us" path="signupoption"/>
            <img
                    src="./assets/login.svg"
                    width="360"
                    height="360"
                    className="fixed-bottom mb-1"
                    style={{zIndex: "-1"}}
                    alt="Login Image"
                />
            <Container fluid className="mt-5 mb-3">
                <Row>
                    <Col align="center" ><h1>Welcome Back.</h1></Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="mt-4 ">
                        <Button variant="primary" size="lg" block>
                            <LogoGoogle
                                color="white"
                                height="22px"
                                width="22px"
                                className="float-left align-middle"
                            /> Sign in with Google
                    </Button></Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="mt-3">
                        <Button variant="dark" size="lg" block>
                            <LogoApple
                                color="white"
                                height="22px"
                                width="22px"
                                className="float-left align-middle"
                            /> Sign in with Apple
                    </Button></Col>
                </Row>
                <Row>
                    <Col md={{ span: 8, offset: 2 }} className="mt-3">
                        <h6 style={{

                            textAlign: "center",
                            borderBottom: "1px solid #000",
                            lineHeight: "0.1em",
                            margin: "10px 0 20px"
                        }}><span style={{
                            background: "#fff",
                            padding: "0 10px"
                        }}>Or, sign in with your email</span></h6>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="mt-3">
                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" name="email" placeholder="Enter work email" value={formik.values.email}
                                    onChange={formik.handleChange} isInvalid={formik.touched.email && formik.errors.email} />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" name="password" placeholder="Enter your Password" value={formik.values.password}
                                    onChange={formik.handleChange} isInvalid={formik.touched.password && formik.errors.password} />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Row>
                                <Col md={6} >
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check
                                    name="radio"
                                    type="radio"
                                    label="Keep me signed in"
                                    onChange={formik.handleChange}
                                    id="formHorizontalRadios1"
                                />
                            </Form.Group>
                                </Col >
                                <Col md={6} className="mb-3 ">
                                   <u>Forgot your password?</u>
                                </Col>
                            </Row>
                            
                            <Button variant="primary" type="submit" size="lg" block>
                                Sign In
                            </Button>
                        </Form>
                    </Col>
                </Row>
                
            </Container>
            
            
        </div >
    );

}

export default connect(
    null,
    { signIn }
  )(Login);

=======
import React from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useFormik } from "formik";

import { connect } from "react-redux";
import { LogoGoogle, LogoApple } from "react-ionicons";

import { signIn } from "../../actions/authAction";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Navigationbar from "../Navigationbar";
const useStyles = makeStyles((theme) => ({}));

const Login = (props) => {
  const validate = (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Password length must be greater then 6 ";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      radio: false,
    },
    validate,
    onSubmit: (values) => {
      props.signIn(values);
    },
  });
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:960px)");
  return (
    <div>
      <Navigationbar text="Join Us" path="signupoption" />
      <hr style={{ border: "1px solid blue", marginBlock: "0px" }} />
      <img
        src="./assets/login.svg"
        width="360"
        height="360"
        style={{
          zIndex: "-1",
          opacity: "0.8",
          position: "absolute",
          bottom: "0px",
        }}
        alt="Login"
      />
      <Grid container justify="center" alignItems="center">
        <Grid
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          style={{ marginTop: "20px" }}
        >
          <center>
            <Grid
              item
              xs={12}
              style={{ marginTop: "20px" }}
              // style={{ backgroundColor: "black" }}
            >
              <h1>Welcome Back.</h1>
            </Grid>
          </center>
          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "blue",
                color: "white",
                width: "100%",
                // width: `${isMobile ? "100%" : "50%"}`,
              }}
            >
              <LogoGoogle
                color="white"
                height="22px"
                width="22px"
                style={{ marginRight: "10px" }}
              />
              Sign in with Google
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              style={{
                marginBlock: "20px",
                backgroundColor: "black",
                color: "white",
                width: "100%",
                // width: `${isMobile ? "100%" : "50%"}`,
              }}
            >
              <LogoApple
                color="white"
                height="22px"
                width="22px"
                style={{ marginRight: "10px" }}
              />
              Sign in with Apple
            </Button>
          </Grid>

          <Grid item style={{ width: "100%" }}>
            <h6
              style={{
                textAlign: "center",
                borderBottom: "1px solid #000",
                lineHeight: "0.1em",
                margin: "10px 0 20px",
              }}
            >
              <span
                style={{
                  background: "#fff",
                  padding: "0 10px",
                  fontSize: "20px",
                }}
              >
                Or, sign in with your email
              </span>
            </h6>
          </Grid>

          <form
            action=""
            method="POST"
            onSubmit={formik.handleSubmit}
            noValidate
            style={{ width: "100%" }}
          >
            <Grid item style={{ paddingTop: "10px" }}>
              <TextField
                fullWidth
                error={
                  formik.touched.email && formik.errors.email ? true : false
                }
                required
                id="email"
                name="email"
                type="email"
                label="Email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.email && formik.errors.email
                    ? `${formik.errors.email}`
                    : ""
                }
                variant="outlined"
              />
            </Grid>

            <Grid item style={{ marginBlock: "20px" }}>
              <TextField
                error={
                  formik.touched.password && formik.errors.password
                    ? true
                    : false
                }
                required
                fullWidth
                id="password"
                name="password"
                type="password"
                label="Password"
                autoComplete="current-password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.password && formik.errors.password
                    ? `${formik.errors.password}`
                    : ""
                }
                variant="outlined"
              />
            </Grid>

            <Grid
              container
              justify="space-between"
              alignItems="center"

              // style={{ backgroundColor: "black" }}
            >
              <Grid item xs={12} md={6}>
                <FormControlLabel
                  control={
                    <Radio
                      onChange={formik.handleChange}
                      value={formik.values.radio}
                      name="radio"
                      inputProps={{ "aria-label": "A" }}
                    />
                  }
                  label="Keep me signed in"
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                style={{ textAlign: `${isMobile ? "" : "end"}` }}
              >
                <u>Forgot your password?</u>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                size="large"
                style={{
                  marginBlock: "10px",
                  backgroundColor: "blue",
                  color: "white",

                  width: "100%",
                }}
              >
                Sign In
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    screenSize: state.screen.screenSize,
  };
};

export default connect(mapStateToProps, { signIn })(Login);
>>>>>>> 221b84f1509a26e946bcb591c22d3c038670249d
