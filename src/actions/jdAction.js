import axios from "../apis/axios.js";
import history from "../history";
export const jd = (file) => async (dispatch) => {
  try {
    const response = await axios.post(
      "/file.json",
      { file },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (e) {
    console.log(e);
  }

  dispatch({ type: "jd", payload: file });
};
