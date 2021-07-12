import history from "../history";
import axios from "../apis/axios.js";

export const signIn = (formValues) => {
  history.push("/");
  return {
    type: "signIn",
    payload: formValues["email"],
  };
};

export const signUpUser =
  ({ email, password, firstName, lastName }) =>
  async (dispatch, getState) => {
    console.log(email, password, firstName, lastName);
    try {
      // const token = localStorage.getItem("user");
      const response = await axios.post(
        "api/register",
        {
          email: email,
          password: password,
          first_name: firstName,
          last_name: lastName,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

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
