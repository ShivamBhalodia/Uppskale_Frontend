import history from "../history";
import axios from "../apis/axios.js";

export const saveYpDetails = (formValues) => async (dispatch, getState) => {
  dispatch({ type: "saveYpDetails", payload: formValues });
  history.push("/");
};

export const saveCompanyDetails =
  (formValues) => async (dispatch, getState) => {
    dispatch({ type: "saveCompanyDetails", payload: formValues });
    history.push("/");
  };
