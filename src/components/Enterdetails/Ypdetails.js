import React from 'react';
import { Container, Jumbotron, Form, Button, Row, Col } from 'react-bootstrap';
import Navigationbar from '../Navigationbar';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import {saveYpDetails} from '../../actions/detailsAction'

const Ypdetails = (props) => {
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

        if (!values.address) {
            errors.address = 'Required';
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            address: '',
            dateOfBirth: null,
            mobile: '',
            educationalQualification: '',
            instituteName: '',
            currentlyPursuing: false,
            graduationDate: null,
            companyName: '',
            role: '',
            startDate: null,
            endDate: null,
            currentlyWorking: false,
            work: '',
            skills: '',
            interests: '',
            passion: '',
        },
        validate,
        onSubmit: values => {
            props.saveYpDetails(values);
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
                    <h1 className="mb-3">Enter Your Details!!!</h1>
                    <Row >
                        <Col md={6}>
                            <Form onSubmit={formik.handleSubmit}>
                                <h4><u>Personal Details</u></h4>
                                <Form.Group controlId="validationFormik41">
                                    <Form.Label>FirstName *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        placeholder="Enter firstName" value={formik.values.firstName}
                                        onChange={formik.handleChange} isInvalid={formik.touched.firstName && formik.errors.firstName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.firstName}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationFormik42">
                                    <Form.Label>LastName *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        placeholder="Enter lastName" value={formik.values.lastName}
                                        onChange={formik.handleChange} isInvalid={formik.touched.lastName && formik.errors.lastName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.lastName}
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

                                <Form.Group controlId="validationFormik44">
                                    <Form.Label>DateOfBirth</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="dateOfBirth"
                                        value={formik.values.dateOfBirth}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="validationFormik45">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="mobile"
                                        placeholder="Enter Mobile no." value={formik.values.mobile}
                                        onChange={formik.handleChange}
                                    />

                                </Form.Group>

                                <h4 className="mt-4"><u>Education Details</u></h4>

                                <Form.Group controlId="validationFormik46">
                                    <Form.Label>EducationalQualification</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="educationalQualification"
                                        placeholder="Enter educationalQualification" value={formik.values.educationalQualification}
                                        onChange={formik.handleChange}
                                    />

                                </Form.Group>



                                <Form.Group controlId="validationFormik47">
                                    <Form.Label>InstituteName</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="instituteName"
                                        placeholder="Enter your instituteName" value={formik.values.instituteName}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicCheckbox11">
                                    <Form.Check
                                        name="currentlyPursuing"
                                        type="checkbox"
                                        label="CurrentlyPursuing  "
                                        onChange={formik.handleChange}
                                        id="formHorizontalRadios11"
                                    />
                                </Form.Group>

                                <Form.Group controlId="validationFormik48">
                                    <Form.Label>GraduationDate</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="graduationDate"
                                        value={formik.values.graduationDate}
                                        onChange={formik.handleChange}
                                    />

                                </Form.Group>

                                <h4 className="mt-4"><u>Experience Details</u></h4>
                                <Form.Group controlId="validationFormik49">
                                    <Form.Label>CompanyName</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="companyName"
                                        placeholder="Enter companyName" value={formik.values.companyName}
                                        onChange={formik.handleChange}
                                    />

                                </Form.Group>



                                <Form.Group controlId="validationFormik50">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="role"
                                        placeholder="Enter about your role" value={formik.values.role}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="validationFormik51">
                                    <Form.Label>StartDate</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="startDate"
                                        value={formik.values.startDate}
                                        onChange={formik.handleChange}
                                    />

                                </Form.Group>

                                <Form.Group controlId="validationFormik52">
                                    <Form.Label>EndDate</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="endDate"
                                        value={formik.values.endDate}
                                        onChange={formik.handleChange}
                                    />

                                </Form.Group>

                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check
                                        name="currentlyWorking"
                                        type="checkbox"
                                        label="CurrentlyWorking "
                                        onChange={formik.handleChange}
                                        id="formHorizontalRadios1"
                                    />
                                </Form.Group>
                                <Form.Group controlId="validationFormik53">
                                    <Form.Label>Work</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="work"
                                        placeholder="Enter work details" value={formik.values.work}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Group>

                                <h4 className="mt-4"><u>Final Step</u></h4>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Skills</Form.Label>
                                    <Form.Control as="textarea" name="skills"
                                        placeholder="Enter your skills!!!" value={formik.values.skills}
                                        onChange={formik.handleChange} rows={2} />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea2">
                                    <Form.Label>Interests</Form.Label>
                                    <Form.Control as="textarea" name="interests"
                                        placeholder="Enter your interests!!!" value={formik.values.interests}
                                        onChange={formik.handleChange} rows={2} />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea22">
                                    <Form.Label>Passion </Form.Label>
                                    <Form.Control as="textarea" name="passion"
                                        placeholder="Enter your passion!!!" value={formik.values.passion}
                                        onChange={formik.handleChange} rows={2} />
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

export default connect(
    null,
    { saveYpDetails }
  )(Ypdetails);



