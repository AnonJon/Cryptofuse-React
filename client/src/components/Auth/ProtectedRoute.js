import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const auth = ({ component: Component }, props) => {
  const { isAuthenticated } = props.auth;

  if (isAuthenticated) {
    return <Component {...props} />;
  } else {
    return <Redirect to="/" />;
  }
};

const ProtectedRoute = ({ props, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        auth();
      }}
    />
  );
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, null)(ProtectedRoute);
