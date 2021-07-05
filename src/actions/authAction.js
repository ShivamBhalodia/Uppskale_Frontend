import history from "../history";
import axios from "../apis/axios.js";

export const signIn = (formValues) => {
  history.push("/");
  return {
    type: "signIn",
    payload: formValues["email"],
  };
};

export const signUpUser = (values) => async (dispatch, getState) => {
  try {
    // const token = localStorage.getItem("user");
    const response = await axios.post("api/register", JSON.stringify(values), {
      headers: {
        // "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
    });

    // if (localStorage.getItem("role") === "yp") history.push("/ypdetails");
    // else history.push("/companydetails");
    dispatch({ type: "signUpUser" });
    history.push("login");
  } catch (e) {
    console.log(e);
  }
};

export const screen = (size) => {
  return {
    type: "screen",
    payload: size,
  };
};
