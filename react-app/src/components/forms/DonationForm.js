import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { addDonation } from "../../store/donation";

export default function DonationForm({ project_id }) {
  const [amount, setAmount] = useState(0);
  const [fullName, setFullName] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCVC] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateFullName = (e) => setFullName(e.target.value);
  const updateCreditCardNumber = (e) => setCreditCardNumber(e.target.value);
  const updateCVC = (e) => setCVC(e.target.value);
  const updateExpDate = (e) => setExpDate(e.target.value);

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
    const donation = { user_id, amount, project_id };
    dispatch(addDonation(donation));
    handleClose();
  };

  return (
    <>
      <Button id='projectDonateButton' onClick={handleClickOpen}>Support this project</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="donate-form-title"
      >
        <DialogContent>
          <div className="donationForm">
            <form onSubmit={handleSubmit} className="donationForm">
              <fieldset>
                <legend>Support This Project</legend>
                <div className="donationForm__amount donationForm__input">
                  <label>
                    Amount
                    <input
                      type="number"
                      value={amount}
                      placeholder="10"
                      onChange={updateAmount}
                      required
                    />
                  </label>
                </div>
                <div className="donationForm__credit donationForm__input">
                  <label>
                    Name on Card
                    <input
                      type="text"
                      value={fullName}
                      placeholder="John Smith"
                      onChange={updateFullName}
                    />
                  </label>
                  <label>
                    Card Number
                    <input
                      type="text"
                      value={creditCardNumber}
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                      onChange={updateCreditCardNumber}
                    />
                  </label>
                  <div className="donationForm__input--half">
                    <label className="donationForm__label">
                      EXP
                      <input
                        type="text"
                        value={expDate}
                        placeholder="MM/YY"
                        onChange={updateExpDate}
                      />
                    </label>
                    <label>
                      CVC
                      <input
                        type="number"
                        value={cvc}
                        placeholder="xxxx"
                        onChange={updateCVC}
                      />
                    </label>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <button className="donationForm__button" onClick={handleClose}>
            Cancel
          </button>
          <button className="donationForm__button" onClick={handleSubmit}>
            Donate
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}
