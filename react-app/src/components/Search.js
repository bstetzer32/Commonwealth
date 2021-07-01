import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { searching } from "../store/search";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const checkKeyUp = (e) => {
    console.log(e.key)
    if(e.key === 'Enter') {
      handleSearch();
    }
  }

  const handleSearch = () => {
    dispatch(searching(null, null, null, value));
    history.push("/search");
  };

  return (
    <TextField
      id="standard-search"
      label="Search"
      type="search"
      onKeyUp={checkKeyUp}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      value={value}
      className="nav__element nav__element--searchBar"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="search" onClick={handleSearch} edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
