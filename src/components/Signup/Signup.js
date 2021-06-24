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

