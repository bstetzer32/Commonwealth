import React from "react";
import { useState, useEffect } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getDiscovery} from '../../../store/discovery'

  

const Discover = () => {
  const discovery = useSelector((state) => state.discovery);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(()=>{
    dispatch(getDiscovery())
  }, [])

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
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: '20ch',
          },
        }}
      >
        {Array.from(discovery).map(state => <MenuItem onClick={handleClose}>{state.name}</MenuItem>)}
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
