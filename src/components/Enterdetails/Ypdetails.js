<<<<<<< HEAD
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



=======
import React from "react";
import Typography from "@material-ui/core/Typography";
import Navigationbar from "../Navigationbar";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { saveYpDetails } from "../../actions/detailsAction";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Ypdetails = (props) => {
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

    if (!values.address) {
      errors.address = "Required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      dateOfBirth: null,
      mobile: "",
      educationalQualification: "",
      instituteName: "",
      currentlyPursuing: false,
      graduationDate: null,
      companyName: "",
      role: "",
      startDate: null,
      endDate: null,
      currentlyWorking: false,
      work: "",
      skills: "",
      interests: "",
      passion: "",
    },
    validate,
    onSubmit: (values) => {
      props.saveYpDetails(values);
    },
  });

  return (
    <div>
      <Navigationbar text="Logout" path="logout" />
      <hr style={{ border: "1px solid blue", marginBlock: "-2px" }} />
      <div
        style={{
          backgroundImage: "url('./assets/signup.svg')",
          backgroundSize: "80vh",
          backgroundPosition: "right",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container justify="flex-start" alignItems="center">
          <Grid
            container
            justify="center"
            alignItems="center"
            xs={12}
            md={6}
            style={{ paddingInline: "10px" }}

            // style={{ backgroundColor: "black" }}
          >
            <Grid
              item
              xs={12}
              style={{ marginTop: "50px" }}
              // style={{ backgroundColor: "black" }}
            >
              <Typography variant="h4">Enter Your Details!!!</Typography>
            </Grid>
            <form
              action=""
              method="POST"
              onSubmit={formik.handleSubmit}
              noValidate
              style={{ width: "100%" }}
            >
              <Typography variant="h6">
                <u>Personal Details</u>
              </Typography>

              <Grid
                item
                xs={12}
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
                <TextField
                  error={
                    formik.touched.firstName && formik.errors.firstName
                      ? true
                      : false
                  }
                  fullWidth
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
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
                <TextField
                  error={
                    formik.touched.lastName && formik.errors.lastName
                      ? true
                      : false
                  }
                  required
                  fullWidth
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
              <Grid
                item
                xs={12}
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
                <TextField
                  error={
                    formik.touched.address && formik.errors.address
                      ? true
                      : false
                  }
                  required
                  fullWidth
                  required
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
              <Grid
                item
                xs={12}
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
                <TextField
                  error={
                    formik.touched.dateOfBirth && formik.errors.dateOfBirth
                      ? true
                      : false
                  }
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  label="DateOfBirth"
                  value={formik.values.dateOfBirth}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.dateOfBirth && formik.errors.dateOfBirth
                      ? `${formik.errors.dateOfBirth}`
                      : ""
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
                <TextField
                  error={
                    formik.touched.mobile && formik.errors.mobile ? true : false
                  }
                  fullWidth
                  required
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
              <Typography variant="h6" style={{ marginTop: "10px" }}>
                <u>Education Details</u>
              </Typography>

              <Grid
                item
                xs={12}
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
                <TextField
                  error={
                    formik.touched.educationalQualification &&
                    formik.errors.educationalQualification
                      ? true
                      : false
                  }
                  fullWidth
                  required
                  id="educationalQualification"
                  name="educationalQualification"
                  type="text"
                  label="EducationalQualification"
                  value={formik.values.educationalQualification}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.educationalQualification &&
                    formik.errors.educationalQualification
                      ? `${formik.errors.educationalQualification}`
                      : ""
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
                <TextField
                  error={
                    formik.touched.instituteName && formik.errors.instituteName
                      ? true
                      : false
                  }
                  fullWidth
                  required
                  id="instituteName"
                  name="instituteName"
                  type="text"
                  label="InstituteName"
                  value={formik.values.instituteName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.instituteName && formik.errors.instituteName
                      ? `${formik.errors.instituteName}`
                      : ""
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={formik.handleChange}
                      value={formik.values.CurrentlyPursuing}
                      name="CurrentlyPursuing"
                      inputProps={{ "aria-label": "A" }}
                    />
                  }
                  label="CurrentlyPursuing"
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
                <TextField
                  error={
                    formik.touched.graduationDate &&
                    formik.errors.graduationDate
                      ? true
                      : false
                  }
                  id="graduationDate"
                  name="graduationDate"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  label="GraduationDate"
                  value={formik.values.graduationDate}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.graduationDate &&
                    formik.errors.graduationDate
                      ? `${formik.errors.graduationDate}`
                      : ""
                  }
                  variant="outlined"
                />
              </Grid>
              <Typography variant="h6" style={{ marginTop: "10px" }}>
                <u>Experience Details</u>
              </Typography>

              <Grid
                item
                xs={12}
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
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
              <Grid
                item
                xs={12}
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
                <TextField
                  error={
                    formik.touched.role && formik.errors.role ? true : false
                  }
                  fullWidth
                  required
                  id="role"
                  name="role"
                  type="text"
                  label="Role"
                  value={formik.values.role}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.role && formik.errors.role
                      ? `${formik.errors.role}`
                      : ""
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
                <TextField
                  error={
                    formik.touched.startDate && formik.errors.startDate
                      ? true
                      : false
                  }
                  id="startDate"
                  name="startDate"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  label="StartDate"
                  value={formik.values.startDate}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.startDate && formik.errors.startDate
                      ? `${formik.errors.startDate}`
                      : ""
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
                <TextField
                  error={
                    formik.touched.endDate && formik.errors.endDate
                      ? true
                      : false
                  }
                  id="endDate"
                  name="endDate"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  label="EndDate"
                  value={formik.values.endDate}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.endDate && formik.errors.endDate
                      ? `${formik.errors.endDate}`
                      : ""
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={formik.handleChange}
                      value={formik.values.currentlyWorking}
                      name="currentlyWorking"
                      inputProps={{ "aria-label": "A" }}
                    />
                  }
                  label="CurrentlyWorking"
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
                <TextField
                  error={
                    formik.touched.work && formik.errors.work ? true : false
                  }
                  fullWidth
                  required
                  id="work"
                  name="work"
                  type="text"
                  label="Work"
                  value={formik.values.work}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.work && formik.errors.work
                      ? `${formik.errors.work}`
                      : ""
                  }
                  variant="outlined"
                />
              </Grid>
              <Typography variant="h6" style={{ marginTop: "10px" }}>
                <u>Final Step</u>
              </Typography>

              <Grid
                item
                xs={12}
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
                <TextField
                  error={
                    formik.touched.skills && formik.errors.skills ? true : false
                  }
                  fullWidth
                  required
                  id="skills"
                  name="skills"
                  type="text"
                  label="Skills"
                  multiline
                  rows={2}
                  value={formik.values.skills}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.skills && formik.errors.skills
                      ? `${formik.errors.skills}`
                      : ""
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
                <TextField
                  error={
                    formik.touched.interests && formik.errors.interests
                      ? true
                      : false
                  }
                  fullWidth
                  required
                  id="interests"
                  name="interests"
                  type="text"
                  label="Interests"
                  multiline
                  rows={2}
                  value={formik.values.interests}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.interests && formik.errors.interests
                      ? `${formik.errors.interests}`
                      : ""
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginTop: "10px" }}
                // style={{ backgroundColor: "black" }}
              >
                <TextField
                  error={
                    formik.touched.passion && formik.errors.passion
                      ? true
                      : false
                  }
                  fullWidth
                  required
                  id="passion"
                  name="passion"
                  type="text"
                  label="Passion"
                  multiline
                  rows={2}
                  value={formik.values.passion}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.passion && formik.errors.passion
                      ? `${formik.errors.passion}`
                      : ""
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={6}

                // style={{ backgroundColor: "black" }}
              >
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
        </Grid>
      </div>
    </div>
  );
};

export default connect(null, { saveYpDetails })(Ypdetails);
>>>>>>> 221b84f1509a26e946bcb591c22d3c038670249d
