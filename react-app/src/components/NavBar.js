import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import Button from "@material-ui/core/Button";
import SearchBar from "./Search";
import Discover from "./utils/Menus/Discover";
import LoginMenu from "./utils/Menus/LoginMenu";

const NavBar = () => {
  return (
    <nav id="navbar">
      <Discover className="nav_element" id="nav_element--discover" />
      <div className="nav_element" id="nav_logo">
        commonwealth
      </div>
      <SearchBar className="nav_element" id="nav_element--searchBar" />
      <LoginMenu className="nav_element" id="nav_element--loginMenu" />
    </nav>
  );
};

export default NavBar;
