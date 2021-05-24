import React from 'react'
import { useState } from 'react'
import LogoutButton from "../../auth/LogoutButton";
import DehazeIcon from '@material-ui/icons/Dehaze';
import Menu from "@material-ui/core/Menu"
import MenuItem from '@material-ui/core/MenuItem'
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
const LoginMenu = () => {

  const [anchorEl, setAnchorEl] = useState(null)

  const openMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Button onClick={openMenu}><DehazeIcon /></Button>
      <Menu keepMounted anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
  </NavLink>
        </MenuItem>

        <MenuItem>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
  </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink exact={true} activeClassName="active" to="/users">
            <Button variant="contained">Users</Button>
          </NavLink>
        </MenuItem>

        <MenuItem>
          <LogoutButton />
        </MenuItem>
      </Menu>
    </>
  )
}


export default LoginMenu
