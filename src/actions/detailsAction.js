<<<<<<< HEAD
import history from "../history";

export const saveYpDetails = (formValues) => async (dispatch, getState) => {
  console.log(getState());
  //   const response = await streams.post('/streams', { ...formValues, userId });

  dispatch({ type: "saveYpDetails", payload: { formValues: formValues } });
  history.push("/");
};

export const saveCompanyDetails =
  (formValues) => async (dispatch, getState) => {
    const { userId } = getState().userId;
    //   const response = await streams.get('/streams');
    //   dispatch({ type: FETCH_STREAMS, payload: response.data });
    dispatch({ type: "saveCompanyDetails", payload: formValues });
    // /history.push('/');
  };
=======
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
>>>>>>> 221b84f1509a26e946bcb591c22d3c038670249d
