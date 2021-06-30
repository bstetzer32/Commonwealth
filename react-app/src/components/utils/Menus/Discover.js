import React from "react";
import { useState, useEffect } from "react";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { getDiscovery } from "../../../store/discovery";
import DiscoverCities from "./DiscoverCities";

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

  useEffect(() => {
    dispatch(getDiscovery());
  }, [dispatch]);

  useEffect(() => {
    if(anchorEl) {
      const discoverMenu = document.querySelector('.MuiPaper-elevation8');
      discoverMenu.id = 'discoverMenu';
    }
  }, [anchorEl])

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
            maxHeight: '38%',
            width: "20ch",
            top: "100px"
          },
        }}
      >
        {Array.from(discovery).map((state) => (
          <span key={state.id}>
            <DiscoverCities state={state} />
          </span>
        ))}
      </Menu>
    </>
  );
};

export default Discover;
