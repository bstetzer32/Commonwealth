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
      <Discover />
      <div class="navbar logo">Commonwealth</div>
      <SearchBar />
      <LoginMenu />
    </nav>
  );
};

export default NavBar;
