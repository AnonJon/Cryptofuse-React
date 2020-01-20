import { combineReducers } from "redux";

import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  users: userReducer,
  admin: adminReducer
});
