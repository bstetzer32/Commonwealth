import React from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import searching from "../store/search"
const SearchBar = () => {
  const handleSearch = (e) => {
    dispatchEvent(searching(e))
  };
  return (
    <TextField
      id="standard-search"
      label="Search"
      type="search"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="search" onClick={e=>handleSearch(e.target.value)} edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
