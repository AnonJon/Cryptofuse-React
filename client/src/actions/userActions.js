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

export const sendContactEmail = ({
  name,
  email,
  subject,
  message
}) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify({ name, email, subject, message });

  axios
    .post("/api/users/userContact", body, config)
    .then(res =>
      dispatch({
        type: "CONTACT_FORM_SUCCESS",
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: "LOGIN_FAIL"
      });
    });
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
  const body = JSON.stringify({ coin_total });

  axios.patch(`/api/users/updateCoinTotal/${id}`, body, config).then(res =>
    dispatch({
      type: "UPDATE_COIN_TOTAL",
      value: { id: id, coins: coin_total }
    })
  );
};

//Update TOTP
export const updateTOTP = id => dispatch => {
  const config1 = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  axios.post("/api/auth/totp-secret", config1).then(res => {
    let totpSecret = res.data.secret;

    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    // Request body
    const body = JSON.stringify({ totpSecret });

    axios.patch(`/api/users/updateTOTP/${id}`, body, config).then(res =>
      dispatch({
        type: "UPDATE_TOTP",
        value: { id: id, totpSecret: totpSecret }
      })
    );
  });
};

//Update Two-Factor setup
export const twoFactorSetup = (id, twoFactorSetup) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request body
  const body = JSON.stringify({ twoFactorSetup });

  axios
    .patch(`/api/users/updateTwoFactorSignin/${id}`, body, config)
    .then(res =>
      dispatch({
        type: "UPDATE_TWOFACTOR_SETUP",
        value: { id: id, twoFactorSetup: twoFactorSetup }
      })
    );
};

//Push Portfolio_value_array

export const portfolioPriceHistory = (
  id,
  portfolio_price_history
) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ portfolio_price_history });
  axios.patch(`/api/users/pushPortfolioPrice/${id}`, body, config).then(res =>
    dispatch({
      type: "PUSH_PORTFOLIO_PRICE",
      value: { id: id, portfolio_price_history: portfolio_price_history }
    })
  );
};

// Get user Bitcoin amount

export const getUserBitcoinAmount = receiveAddress => {
  return dispatch => {
    fetch(
      `https://api.blockcypher.com/v1/bcy/test/addrs/${receiveAddress}/full`
    )
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: "BITCOIN_AMOUNT",
          payload: res
        });
      });
  };
};
