import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import Button from "@material-ui/core/Button";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" exact={true} activeClassName="active">
        Discover
      </NavLink>

      <NavLink to="/login" exact={true} activeClassName="active">
        Login
      </NavLink>

      <NavLink to="/sign-up" exact={true} activeClassName="active">
        Sign Up
      </NavLink>

      <NavLink exact={true} activeClassName="active" to="/users">
        <Button variant="contained">Users</Button>
      </NavLink>

      <LogoutButton />
    </nav>
  );
};

export default NavBar;
