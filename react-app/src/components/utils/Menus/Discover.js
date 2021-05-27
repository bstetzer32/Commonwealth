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
            width: "20ch",
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




