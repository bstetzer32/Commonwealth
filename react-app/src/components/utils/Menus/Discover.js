import React from "react";
import { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const Discover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={openMenu} variant="text">
        {" "}
        Discover
      </Button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Arkansas</MenuItem>
        <MenuItem onClick={handleClose}>Alabama</MenuItem>
        <MenuItem onClick={handleClose}>Dakota</MenuItem>
      </Menu>
    </>
  );
};

export default Discover;

{
  /* This is a possible nested menu solution */
}
{
  /* <Menu
          elevation={0}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          getContentAnchorEl={null}
          keepMounted  anchorEl={anchorEl2} open={Boolean(anchorEl2)} onClose={handleClose}>
          <MenuItem>Jonesboro</MenuItem>
        </Menu> */
}

// const openMenu2 = (event) => {
//   setAnchorEl2(event.currentTarget)

// }

// const [anchorEl2, setAnchorEl2] = useState(null)
