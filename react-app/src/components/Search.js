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
      type="search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton aria-label="search" onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
