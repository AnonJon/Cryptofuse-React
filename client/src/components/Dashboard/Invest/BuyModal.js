import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { getAdmin } from "../../../actions/adminAuctions";
import axios from "axios";
import Modal from "@material-ui/core/Modal";
import Button from "../UserProfile/CustomButtons/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { TextField, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SnackBarFundsError from "../../Auth/SnackBarFundsError";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    width: "500px"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  textField: {
    "& label.Mui-focused": {
      color: "green"
    },
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 500
  }
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "rgb(178,67, 87)"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgb(178,67, 87)"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgb(178,67, 87)"
      },
      "&:hover fieldset": {
        borderColor: "rgb(178,67, 87)"
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgb(178,67, 87)"
      }
    }
  }
})(TextField);

const BuyModal = (admin, auth) => {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [fuseAmount, setFuseAmount] = useState(null);
  const [amount, setAmount] = useState(null);
  const [fusePrice, setFusePrice] = useState(null);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [bitcoinToUSD, setBitcoinToUSD] = useState(null);
  const [userBitcoin, setUserBitcoin] = useState(null);

  const { user, isAuthenticated } = auth;
  useEffect(() => {
    getAdmin();
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD`
      )
      .then(data => {
        setBitcoinPrice(data.data.RAW.BTC.USD.PRICE);
      });
  }, []);
  useEffect(() => {
    if (admin.admin.adminLoaded) {
      setFusePrice(admin.admin[0].fuse_price);
    }
    if (isAuthenticated) {
      axios
        .get(
          `https://api.blockcypher.com/v1/bcy/test/addrs/${user.receiveAddress}/full`
        )
        .then(res => {
          setUserBitcoin(res.data.balance);
        });
    }
  });

  useEffect(() => {
    setBitcoinToUSD(bitcoinPrice * amount);
    setFuseAmount(Math.round((bitcoinToUSD / fusePrice) * 100) / 100);
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onChangeAmount = e => {
    setAmount(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (userBitcoin > amount) {
      handleClose();
    }
  };
  console.log(userBitcoin);
  return (
    <div>
      <Button color="primary" type="button" onClick={handleOpen}>
        Buy
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <Container className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <CssTextField
                id="amount"
                name="amount"
                onChange={onChangeAmount}
                label="Bitcoin Amount"
                type="text"
                margin="normal"
                required
                autoFocus
              />
              <h5>Fuse Tokens Exchange Amount:</h5>
              <p>
                {userBitcoin < amount
                  ? "Not enough Bitcoin"
                  : `${fuseAmount} Fuse`}
              </p>
              <Button color="primary" type="submit">
                Buy
              </Button>
            </form>
          </Container>
        </div>
      </Modal>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.auth,
    admin: state.admin
  };
};

export default withRouter(connect(mapStateToProps, { getAdmin })(BuyModal));
