<<<<<<< HEAD
import React from 'react';
import { Container,Jumbotron, Row, Col, Button, Form } from 'react-bootstrap';
import Navigationbar from '../Navigationbar';
import { useFormik } from 'formik';


const Companydetails = () => {

  const validate = values => {
    const errors = {};

    if (!values.companyName) {
        errors.companyName  = 'Required';
    } else if (values.companyName.length > 50) {
        errors.companyName  = 'Must be 50 characters or less';
    }

    if (!values.mobile) {
      errors.mobile  = 'Required';
  } else if (values.mobile.length != 10) {
      errors.mobile  = 'Must be exactly 10 characters';
  }

    if (!values.address) {
        errors.address = 'Required';
    }



    return errors;
};
const formik = useFormik({
    initialValues: {
      companyName: '',
      address: '',
      mobile: '',
        
    },
    validate,
    onSubmit: values => {
        alert(JSON.stringify(values));
    },
});

  return (
    <div>
      <Navigationbar text="Logout" path="logout"/>
      <Jumbotron style={{
              
                backgroundImage: "url('./assets/signup.svg')",
                backgroundSize: "80vh",
                backgroundPosition: "right",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
            }} >

                <Container >
                    <h1 className="mb-3">Enter Company Details!!!</h1>
                    <Row >
                        <Col md={6}>
                            <Form onSubmit={formik.handleSubmit}>
                                
                                <Form.Group controlId="validationFormik41">
                                    <Form.Label>CompanyName *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="companyName"
                                        placeholder="Enter companyName" value={formik.values.companyName}
                                        onChange={formik.handleChange} isInvalid={formik.touched.companyName && formik.errors.companyName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.companyName}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                
                                <Form.Group controlId="validationFormik43">
                                    <Form.Label>Address *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        placeholder="Enter address" value={formik.values.address}
                                        onChange={formik.handleChange} isInvalid={formik.touched.address && formik.errors.address}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.address}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                

                                <Form.Group controlId="validationFormik45">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="mobile"
                                        placeholder="Enter Mobile no." value={formik.values.mobile}
                                        onChange={formik.handleChange} isInvalid={formik.touched.mobile && formik.errors.mobile}
                                    />
                                  <Form.Control.Feedback type="invalid">
                                        {formik.errors.mobile}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                
                                <Button variant="primary" type="submit" size="lg" block>
                                    Save
                            </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
    </div>
  );

}

export default Companydetails;
=======
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { saveCompanyDetails } from "../../actions/detailsAction";
import Container from "@material-ui/core/Container";
import Navigationbar from "../Navigationbar";

const Companydetails = (props) => {
  const validate = (values) => {
    const errors = {};

    if (!values.companyName) {
      errors.companyName = "Required";
    } else if (values.companyName.length > 50) {
      errors.companyName = "Must be 50 characters or less";
    }

    if (!values.mobile) {
      errors.mobile = "Required";
    } else if (values.mobile.length !== 10) {
      errors.mobile = "Must be exactly 10 characters";
    }

    if (!values.address) {
      errors.address = "Required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      companyName: "",
      address: "",
      mobile: "",
    },
    validate,
    onSubmit: (values) => {
      props.saveCompanyDetails(values);
    },
  });

  return (
    <div>
      <Navigationbar text="Logout" path="logout" />
      <hr style={{ border: "1px solid blue", marginBlock: "-2px" }} />
      <div
        style={{
          backgroundImage: "url('./assets/signup.svg')",
          backgroundSize: "85vh",
          backgroundPosition: "right",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          height: "89vh",
          opacity: "0.8",
        }}
      >
        <Grid container justify="flex-start" alignItems="center"></Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          style={{ marginTop: "50px", paddingInline: "10px" }}
        >
          <Grid item xs={12}>
            <h1>Enter Company Details!!!</h1>
          </Grid>
          <form
            action=""
            method="POST"
            onSubmit={formik.handleSubmit}
            noValidate
            style={{ width: "100%" }}
          >
            <Grid item xs={12} style={{ paddingTop: "12px" }}>
              <TextField
                error={
                  formik.touched.companyName && formik.errors.companyName
                    ? true
                    : false
                }
                fullWidth
                required
                id="companyName"
                name="companyName"
                type="text"
                label="CompanyName"
                value={formik.values.companyName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.companyName && formik.errors.companyName
                    ? `${formik.errors.companyName}`
                    : ""
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} style={{ paddingTop: "12px" }}>
              <TextField
                error={
                  formik.touched.address && formik.errors.address ? true : false
                }
                required
                fullWidth
                id="address"
                name="address"
                type="text"
                label="Address"
                value={formik.values.address}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.address && formik.errors.address
                    ? `${formik.errors.address}`
                    : ""
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} style={{ paddingTop: "12px" }}>
              <TextField
                error={
                  formik.touched.mobile && formik.errors.mobile ? true : false
                }
                required
                fullWidth
                id="mobile"
                name="mobile"
                type="text"
                label="Mobile"
                value={formik.values.mobile}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.mobile && formik.errors.mobile
                    ? `${formik.errors.mobile}`
                    : ""
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                size="large"
                variant="outlined"
                style={{
                  marginBlock: "12px",
                  width: "100%",
                  backgroundColor: "blue",
                  color: "white",
                }}
              >
                Save
              </Button>
            </Grid>
          </form>
        </Grid>
      </div>
    </div>
  );
};

export default connect(null, { saveCompanyDetails })(Companydetails);
>>>>>>> 221b84f1509a26e946bcb591c22d3c038670249d
