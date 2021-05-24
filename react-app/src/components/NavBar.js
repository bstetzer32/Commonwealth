import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import Button from "@material-ui/core/Button";
import SearchBar from "./Search";
import Discover from "./utils/Menus/Discover"
import LoginMenu from './utils/Menus/LoginMenu'

const NavBar = () => {
  return (
    <nav id="navbar">
      <NavLink to="/" exact={true} activeClassName="active">
        Menu
      </NavLink>

      {/* <NavLink to="/login" exact={true} activeClassName="active">
        Login
      </NavLink>

      <NavLink to="/sign-up" exact={true} activeClassName="active">
        Sign Up
      </NavLink> */}

      {/* <NavLink exact={true} activeClassName="active" to="/users">
        <Button variant="contained">Users</Button>
    </NavLink>*/}
      <div class="navbar logo">Commonwealth</div>
      <SearchBar />
      <LogoutButton />
    </nav>
  );
};

export default NavBar;
