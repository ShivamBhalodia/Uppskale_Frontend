<<<<<<< HEAD
import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Navigationbar from '../Navigationbar';
import { useFormik } from 'formik';
// import { connect } from 'react-redux';
// import {signIn} from '../../actions/authAction';

const Signup = () => {

  const validate = values => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 50) {
      errors.firstName = 'Must be 50 characters or less';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 50) {
      errors.lastName = 'Must be 50 characters or less';
    }

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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      terms: false,
    },
    validate,
    onSubmit: values => {
      // props.signIn(values);
      alert(JSON.stringify(values));
    },
  });
  return (
    <div>
      <Navigationbar text="Sign In" path="ypdetails"/>
      <img
        src="./assets/signup.svg"
        width="500"
        height="550"
        style={{
          zIndex: "-1", position: "fixed",
          right: "0", bottom: "0"
        }}
        alt="Sign Up Logo"
      />
      <Container fluid className="mt-5 mb-3">
        <Row>
          <Col><h4>Welcome to Uppskale.</h4></Col>
        </Row>
        <Row>
          <Col ><h1>Create your account</h1></Col>
        </Row>
        <Row>
          <Col md={6} className="mt-5">
            <Form onSubmit={formik.handleSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId="validationFormik01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="Enter firstname" value={formik.values.firstName}
                  onChange={formik.handleChange} isInvalid={formik.touched.firstName && formik.errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col >
                <Col>
                  <Form.Group controlId="validationFormik02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Enter lastname" value={formik.values.lastName}
                  onChange={formik.handleChange} isInvalid={formik.touched.lastName && formik.errors.lastName}
                    />

                    <Form.Control.Feedback type="invalid">
                      {formik.errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter work email" value={formik.values.email}
                  onChange={formik.handleChange} isInvalid={formik.touched.email && formik.errors.email} />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter your Password" value={formik.values.password}
                  onChange={formik.handleChange} isInvalid={formik.touched.password && formik.errors.password} />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
                </Form.Control.Feedback>
              </Form.Group>


              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  required
                  name="terms"
                  type="checkbox"
                  label="Agree terms and conditions"
                  onChange={formik.handleChange}
                  isInvalid={!!formik.errors.terms}
                  feedback={formik.errors.terms}
                  id="formHorizontalRadios1"
                />
              </Form.Group>


              <Button variant="primary" type="submit" size="lg" block>
                Continue
                </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );

}

export default Signup;
// export default connect(
//   null,
//   signIn
// )(Signup);

=======
import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Navigationbar from "../Navigationbar";
import { useFormik } from "formik";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { signUpUser } from "../../actions/authAction";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const Signup = (props) => {
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 50) {
      errors.firstName = "Must be 50 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 50) {
      errors.lastName = "Must be 50 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Password length must be greater then 6 ";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    },
    validate,
    onSubmit: (values) => {
      props.signUpUser(values);
    },
  });
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:960px)");
  return (
    <div>
      <Navigationbar text="Sign In" path="ypdetails" />
      <hr style={{ border: "1px solid blue", marginBlock: "0px" }} />
      <img
        src="./assets/signup.svg"
        width="500"
        height="550"
        style={{
          zIndex: "-1",
          position: "fixed",
          right: "0",
          bottom: "0",
          opacity: "0.8",
        }}
        alt="Sign Up Logo"
      />
      <Grid container justify="flex-start" alignItems="center">
        <Grid
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          style={{ paddingInline: "10px", marginTop: "20px" }}
        >
          <Grid item xs={12} style={{ marginTop: "50px" }}>
            <Typography variant="h5">Welcome to Uppskale.</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ marginTop: "0px" }}
            // style={{ backgroundColor: "black" }}
          >
            <Typography variant="h4">Create your account</Typography>
          </Grid>
          <form
            action=""
            method="POST"
            onSubmit={formik.handleSubmit}
            noValidate
            style={{ width: "100%" }}
          >
            <Grid
              container
              justify="space-between"
              alignItems="center"
              spacing={1}
              // style={{ backgroundColor: "black" }}
            >
              <Grid item xs={12} md={6} style={{ paddingTop: "60px" }}>
                <TextField
                  fullWidth
                  error={
                    formik.touched.firstName && formik.errors.firstName
                      ? true
                      : false
                  }
                  required
                  id="firstName"
                  name="firstName"
                  type="text"
                  label="FirstName"
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                      ? `${formik.errors.firstName}`
                      : ""
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                style={{ paddingTop: `${isMobile ? "" : "60px"}` }}
              >
                <TextField
                  fullWidth
                  error={
                    formik.touched.lastName && formik.errors.lastName
                      ? true
                      : false
                  }
                  required
                  id="lastName"
                  name="lastName"
                  type="text"
                  label="LastName"
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.lastName && formik.errors.lastName
                      ? `${formik.errors.lastName}`
                      : ""
                  }
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid item style={{ paddingTop: "12px" }}>
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

            <Grid item style={{ paddingTop: "12px" }}>
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
            <Grid item style={{ paddingTop: "12px" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={formik.handleChange}
                    value={formik.values.terms}
                    name="terms"
                    inputProps={{ "aria-label": "A" }}
                  />
                }
                label="Agree terms and conditions"
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                size="large"
                style={{
                  marginBlock: "20px",
                  backgroundColor: "blue",
                  color: "white",

                  width: "100%",
                }}
              >
                Continue
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

// export default Signup;
export default connect(null, { signUpUser })(Signup);
>>>>>>> 221b84f1509a26e946bcb591c22d3c038670249d
