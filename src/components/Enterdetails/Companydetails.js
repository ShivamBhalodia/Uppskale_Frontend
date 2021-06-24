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
