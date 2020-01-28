import axios from "axios";

export const getAdmin = () => {
  return dispatch => {
    fetch("/api/admin/getAdmin")
      .then(res => res.json())
      .then(admin => {
        dispatch({
          type: "GET_ADMIN",
          payload: admin
        });
      });
  };
};

//Update Fuse_Price
export const updateFusePrice = fuse_price => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request body
  const body = JSON.stringify({ fuse_price });

  axios.patch(`/api/admin/updateFusePrice`, body, config).then(res =>
    dispatch({
      type: "UPDATE_FUSE_PRICE",
      value: { fuse_price: fuse_price }
    })
  );
};

//Update Fuse_Token_Amount
export const updateFuseTokenAmount = fuse_token_amount => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request body
  const body = JSON.stringify({ fuse_token_amount });

  axios.patch(`/api/admin/updateFuseTokenAmount`, body, config).then(res =>
    dispatch({
      type: "UPDATE_FUSE_TOKEN_AMOUNT",
      value: { fuse_token_amount: fuse_token_amount }
    })
  );
};

//push to fuse price chart

export const pushFusePrice = fuse_price_history => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request body
  const body = JSON.stringify({ fuse_price_history });

  axios.put(`/api/admin/pushFusePrice`, body, config).then(res =>
    dispatch({
      type: "PUSH_FUSE_TOKEN_PRICE",
      value: { fuse_price_history: fuse_price_history }
    })
  );
};
