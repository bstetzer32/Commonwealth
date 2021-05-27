import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

export default function DonationForm() {
  const [amount, setAmount] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const updateAmount = (e) => setAmount(e.target.value);

  const user_id = useSelector((state) => {
    if (state.session.user?.id) {
      return state.session.user.id;
    } else {
      return 1;
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const donation = { user_id, amount };
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Donate
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="donate-form-title"
      >
        <DialogTitle id="donate-form-title">Support This Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To donate, please fill out the form and submit.
          </DialogContentText>
          <form className="donationForm">
            <div className="donationForm__amount donationForm__input">
              <label>
                Donation Amount
                <input
                  type="number"
                  value={amount}
                  placeholder="10"
                  onChange={updateAmount}
                  required
                >
                  $
                </input>
              </label>
            </div>
            <div className="donationForm__credit donationForm__input">
              <fieldset>
                <legend>Name on Card</legend>
                <input
                  type="text"
                  value={fullName}
                  placeholder="John Smith"
                  onChange={updateFullName}
                />
              </fieldset>
              <label>
                Card Number
                <input
                  type="number"
                  value={creditCardNumber}
                  placeholder="xxxx - xxxx - xxxx - xxxx"
                  onChange={updateCreditCardNumber}
                />
              </label>
              <fieldset>
                <legend>EXP</legend>
                <input
                  type="text"
                  value={expDate}
                  placeholder="MM/YY"
                  onChange={updateExpDate}
                />
              </fieldset>
              <fieldset>
                <legend>CVC</legend>
                <input
                  type="number"
                  value={cvc}
                  placeholder="xxxx"
                  onChange={updateCVC}
                />
              </fieldset>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Donate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
