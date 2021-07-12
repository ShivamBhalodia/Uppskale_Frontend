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
