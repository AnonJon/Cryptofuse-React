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
  axios.post("https://api.blockcypher.com/v1/bcy/test/addrs").then(res => {
    const private_key = res.data.private;
    const public_key = res.data.public;
    const receiveAddress = res.data.address;

    axios.post("/api/auth/totp-secret").then(res => {
      const totpSecret = res.data.secret;

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
        totpSecret,
        private_key,
        public_key,
        receiveAddress
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

export const twoFactorLoginCode = ({ totpSecret, code }) => dispatch => {
  // Headers

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify({ totpSecret, code });

  axios.post("/api/auth/totp-validate", body, config).then(res => {
    const isValid = res.data.valid;
    if (isValid) {
      dispatch({
        type: "TWO_FACTOR_LOGIN_SUCCESS",
        payload: res.data
      });
    } else {
      dispatch({
        type: "TWO_FACTOR_LOGIN_FAIL",
        payload: "invalid code"
      });
    }
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
