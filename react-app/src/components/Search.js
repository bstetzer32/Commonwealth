import React from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <TextField
      id="standard-search"
      label="Search"
      type="search"
      className="nav__element"
      id="nav__element--searchBar"
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
