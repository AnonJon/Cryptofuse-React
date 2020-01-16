import axios from "axios";
import { returnErrors } from "./errorActions";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// Register User
export const register = ({
  first_name,
  last_name,
  email,
  password
}) => dispatch => {
  //Create a bitcoin address

  const config1 = {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  };
  axios
    .get(
      `/merchant/${process.env.REACT_APP_WALLET_GUID}/accounts/create?${process.env.REACT_APP_WALLET_PASS}&label=${first_name}${last_name}`,
      config1
    )
    .then(res => {
      console.log("response 1", res.data);
      //Get the last account that was created
      const config2 = {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      };
      axios
        .get(
          `/merchant/${process.env.REACT_APP_WALLET_GUID}/accounts/?${process.env.REACT_APP_WALLET_PASS}`,
          config2
        )
        .then(res => {
          const { receiveAddress, extendedPublicKey } = res.data[
            res.data.length - 1
          ];
          console.log("response 2", res.data);

          // Headers
          const config = {
            headers: {
              "Content-Type": "application/json"
            }
          };

          // Request body
          const body = JSON.stringify({
            first_name,
            last_name,
            email,
            password,
            receiveAddress,
            extendedPublicKey
          });

          axios
            .post("/api/users", body, config)

            .then(res =>
              dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
              })
            )
            .catch(err => {
              dispatch(
                returnErrors(
                  err.response.data,
                  err.response.status,
                  "REGISTER_FAIL"
                )
              );
              dispatch({
                type: REGISTER_FAIL
              });
            });
        });
    });
};

// Login User
export const login = ({ email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });

  axios
    .post("/api/auth", body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

export const twoFactorLoginCode = code => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify(code);

  axios
    .post("/api/auth/totp-validate", body, config)
    .then(res =>
      dispatch({
        type: "TWO_FACTOR_LOGIN_SUCCESS",
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// Setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
