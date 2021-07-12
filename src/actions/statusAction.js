import axios from "../apis/axios.js";
import history from "../history";

export const statusYp = (formValues) => {
  return {
    type: "statusYp",
  };
};

export const statusCompany = (formValues) => {
  return {
    type: "statusCompany",
  };
};
