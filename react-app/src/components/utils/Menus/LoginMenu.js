import React, { useEffect, useState} from 'react'
import LogoutButton from "../../auth/LogoutButton";
import DehazeIcon from '@material-ui/icons/Dehaze';
import Menu from "@material-ui/core/Menu"
import MenuItem from '@material-ui/core/MenuItem'
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { authenticate } from "../../../services/auth.js"

const LoginMenu = () => {
  const [loggedIn, setLoggedIn] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null)

  const openMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    let res;
    (async () => {
      res = await authenticate();
      if(res.id) {
        setLoggedIn(true)
      }
    })();
  })

  if (loggedIn) {
    return (
      <>
        <Button onClick={openMenu}><DehazeIcon /></Button>
        <Menu keepMounted anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={()=> {setLoggedIn(false);
            setAnchorEl(null)}}>
            <LogoutButton/>
          </MenuItem>
        </Menu>
      </>
    )
  }

  return (
    <>
      <Button onClick={openMenu}><DehazeIcon /></Button>
      <Menu keepMounted anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem>
          <NavLink to="/login" exact={true} activeClassName="active">
            <Button>
            Login
            </Button>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            <Button>
            Sign Up
            </Button>
          </NavLink>
        </MenuItem>
      </Menu>
    </>
  )
}


export default LoginMenu
