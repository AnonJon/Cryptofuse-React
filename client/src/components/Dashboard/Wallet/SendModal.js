import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "../UserProfile/CustomButtons/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { TextField, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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

export default function SendModal() {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("0.0");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onChangeAddress = e => {
    setAddress(e.target.value);
  };
  const onChangeAmount = e => {
    setAmount(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    const send = { address, amount };

    handleClose();
  };

  return (
    <div>
      <Button color="primary" type="button" onClick={handleOpen}>
        Send
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
                id="address"
                name="address"
                onChange={onChangeAddress}
                label="Bitcoin Address"
                type="text"
                margin="normal"
                required
                autoFocus
              />
              <CssTextField
                id="amount"
                name="amount"
                onChange={onChangeAmount}
                label="BTC"
                type="text"
                margin="normal"
                required
              />
              <Button color="primary" type="submit">
                Send
              </Button>
            </form>
          </Container>
        </div>
      </Modal>
    </div>
  );
}
