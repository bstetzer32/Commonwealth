
import React, {useState} from "react";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import SearchBar from "./Search";
import Discover from "./utils/Menus/Discover";
import { login } from "../store/session";
import LoginMenu from "./utils/Menus/LoginMenu";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  const history = useHistory()
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goToSignUp = () => {
    handleClose()
   return  history.push('/sign-up')
  }
  const logInDemo = async () => {
    handleClose()
    let email = "3000demo@aa.io";
    let password = "password";
    await dispatch(login(email, password));
  }

  const chooseOne = () => {
    if(!user){ return handleClickOpen()}
    else{
      history.push('/create-project')
    }
  }

  return (
    <>
      <div className='nav__logo--smallScreenContainer'>
        <NavLink to='/' className={`nav_title_decorator nav__element`} id="nav__logo--smallScreen">
          commonwealth
        </NavLink>
      </div>
      <nav className="nav__bar">
        <div className="nav__element--discover">
          <Discover className="nav__element" />
        <Button id='nav__element' onClick={chooseOne}>Create A Project</Button>
      {open?
          <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Please create an account"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                You need to create an account to be able to make a new project. Sign up to start making a change in your community, or click the demo button if you'd like to try the demo account!
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={goToSignUp} color="primary" autoFocus>
                Sign-Up
            </Button>
            <Button onClick={logInDemo} color="primary" autoFocus>
                Demo
            </Button>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            </DialogActions>
          </Dialog>
      : null}
      </div>

        <NavLink to='/' className={`nav_title_decorator nav__element`}id="nav__logo">
          commonwealth
        </NavLink>
        <div className="nav__element--searchlog">
          <SearchBar id="nav__element--searchBar" />
          <LoginMenu className="nav__element" id="nav__element--loginMenu" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
