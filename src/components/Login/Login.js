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

