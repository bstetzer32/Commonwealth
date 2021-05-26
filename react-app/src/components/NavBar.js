import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import Button from "@material-ui/core/Button";
import SearchBar from "./Search";
import Discover from "./utils/Menus/Discover";
import LoginMenu from "./utils/Menus/LoginMenu";
import {useHistory} from 'react-router-dom'
const NavBar = () => {
  let history = useHistory()
  return (
    <nav className="nav__bar">
      <div className="nav__element--discover">
        <Discover className="nav__element" />
      </div>
      <NavLink to='/'className="nav__element" id="nav__logo">
        commonwealth
      </NavLink>
      <div className="nav__element--searchlog">
        <SearchBar id="nav__element--searchBar" />
        <LoginMenu className="nav__element" id="nav__element--loginMenu" />
      </div>
    </nav>
  );
};

export default NavBar;
