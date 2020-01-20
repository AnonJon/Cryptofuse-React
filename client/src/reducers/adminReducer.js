const initialState = {
  adminLoaded: false,
  admin: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_ADMIN":
      return {
        ...action.payload,
        adminLoaded: true
      };
    case "UPDATE_FUSE_PRICE":
      let admin = [...state];
      admin.fuse_price = action.value.fuse_price;
      return admin;
    case "UPDATE_FUSE_TOKEN_AMOUNT":
      let adminUpdate = [...state];
      adminUpdate.fuse_token_amount = action.value.fuse_token_amount;
      return adminUpdate;

    default:
      return state;
  }
};
