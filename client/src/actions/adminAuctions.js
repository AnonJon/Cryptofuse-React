import axios from "axios";

export const getAdmin = () => {
  return dispatch => {
    axios
      .get("/api/admin")
      .then(res => res.json())
      .then(admin => {
        dispatch({
          type: "GET_ADMIN",
          payload: admin
        });
      });
  };
};
