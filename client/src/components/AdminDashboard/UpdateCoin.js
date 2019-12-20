import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import Button from "../Dashboard/UserProfile/CustomButtons/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function UpdateCoin(props) {
  const [open, setOpen] = useState(false);
  const [coin, setCoin] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleTextChange = e => {
    setCoin(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.update(props.id, coin);

    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Update
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Update Coin Total</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "350px"
            }}
          >
            <TextField
              id="coin_total"
              placeholder="Coin Total"
              value={coin}
              onChange={handleTextChange}
              required
            />

            <br />
            <Button color="primary" type="submit">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
