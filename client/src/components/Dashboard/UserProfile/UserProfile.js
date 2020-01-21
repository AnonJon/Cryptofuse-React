import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { twoFactorSetup } from "../../../actions/userActions";
// @material-ui/core .
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import PersonIcon from "@material-ui/icons/Person";
import LoginPage from "../../Auth/LoginPage";
import SnackbarError from "../../Auth/SnackbarError";
// core .
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";
import CustomInput from "./CustomInput/CustomInput.js";
import Button from "./CustomButtons/Button.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardAvatar from "./Card/CardAvatar.js";
import CardBody from "./Card/CardBody.js";
import CardFooter from "./Card/CardFooter";
import TwoFactor from "../../Auth/TwoFactor";
import Switch from "@material-ui/core/Switch";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  main: {
    paddingTop: "100px",
    backgroundColor: "#eeeeee"
  }
};

const useStyles = makeStyles(styles);

const UserProfile = ({ auth, twoFactorSetup, history }) => {
  const {
    user,
    isLoading,
    isLoaded,
    isTwoFactorVerified,
    isAuthenticated
  } = auth;
  const [twoFA, setTwoFA] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      if (user.twoFactorSetup && !isTwoFactorVerified) {
        history.push("/two-factor");
      }
    }

    setTwoFA(user.twoFactorSetup);
  });
  const ranking = () => {
    if (user.coin_total < 100) {
      return <p>Bronze User</p>;
    } else if (user.coin_total >= 100 && user.coin_total < 1000) {
      return <p>Silver User</p>;
    } else {
      return <p>Gold User</p>;
    }
  };

  const handleChange = () => {
    setTwoFA(!twoFA);

    twoFactorSetup(user._id, twoFA);
  };

  const classes = useStyles();

  if (isLoading || !isLoaded) {
    return (
      <div>
        <LoginPage />
        <SnackbarError />
      </div>
    );
  }
  return (
    <div className={classes.main}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <PersonIcon
                  style={{
                    height: "100px",
                    width: "100px",
                    color: "rgb(178,67, 87)"
                  }}
                />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>{ranking()} </h6>
              <h4 className={classes.cardTitle}>
                {user.first_name} {user.last_name}
              </h4>
              <p className={classes.description}>{user.about}</p>
              <Link to="/dashboard/invest" style={{ textDecoration: "none" }}>
                <Button color="primary" round>
                  Invest
                </Button>
              </Link>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={5}>
          <Card profile>
            <CardBody profile>
              <h4 className={classes.cardCategory}>Set Up 2FA</h4>

              <p className={classes.description}>
                Please Set Up 2FA If Not Done So.
              </p>
              <Switch checked={twoFA} onChange={handleChange} value={twoFA} />
              <TwoFactor />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                    labelText="Update Your About Me Here..."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { twoFactorSetup })(UserProfile);
