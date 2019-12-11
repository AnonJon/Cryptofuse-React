import { returnErrors } from "./errorActions";
import axios from "axios";

export const getUsers = () => {
  return dispatch => {
    fetch("/api/users/getAll")
      .then(res => res.json())
      .then(users => {
        dispatch({
          type: "GET_USERS",
          payload: users
        });
      });
  };
};

export const deleteUser = id => {
  return dispatch => {
    const requestOptions = { method: "DELETE" };
    axios.delete(`/api/users/deleteUser/${id}`, requestOptions).then(res => {
      dispatch({ type: "DELETE_USER", value: id });
    });
  };
};

//Update Coin Total
export const updateCoinTotal = (id, coin_total) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request body
  const body = JSON.stringify(coin_total);

  axios
    .patch(`/api/users/updateCoinTotal/${id}`, body, config)
    .then(res =>
      dispatch({
        type: "UPDATE_COIN_TOTAL",
        value: id
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "UPDATE_FAIL")
      );
      dispatch({
        type: "UPDATE_FAIL"
      });
    });
};
