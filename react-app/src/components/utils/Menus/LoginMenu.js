import React, { useEffect, useState } from "react";
import LogoutButton from "../../auth/LogoutButton";
import DehazeIcon from "@material-ui/icons/Dehaze";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { authenticate } from "../../../services/auth.js";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  button: {
    textDecoration: "none",
    color: "#fff",
  },
}));

const LoginMenu = () => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDemo = async (e) => {
    e.preventDefault();
    let email = "demo@aa.io";
    let password = "password";
    await dispatch(login(email, password));
  };

  useEffect(() => {
    let res;
    (async () => {
      res = await authenticate();
      if (res.id) {
        setLoggedIn(true);
      }
    })();
  });

  let status = useSelector((state) => state.session.user);

  if (status) {
    return (
      <>
        <Button onClick={openMenu}>
          <DehazeIcon />
        </Button>
        <Menu
          keepMounted
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              setLoggedIn(false);
              setAnchorEl(null);
            }}
          >
            <LogoutButton />
          </MenuItem>
        </Menu>
      </>
    );
  }
  return (
    <>
      <Button onClick={openMenu}>
        <DehazeIcon />
      </Button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <NavLink
            to="/login"
            exact={true}
            activeClassName="active"
            className="login__button"
          >
            <Button className={classes.button}>Login</Button>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/sign-up"
            exact={true}
            activeClassName="active"
            className="signup__button"
          >
            <Button className={classes.button}>Sign Up</Button>
          </NavLink>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setLoggedIn(false);
            setAnchorEl(null);
          }}
        >
          <NavLink
            to="/"
            exact={true}
            activeClassName="active"
            className="signup__button"
          >
            <Button className={classes.button} onClick={handleDemo}>
              Demo
            </Button>
          </NavLink>
        </MenuItem>
      </Menu>
    </>
  );
};

export default LoginMenu;
