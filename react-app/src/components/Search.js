import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { search } from "../store/search"

const SearchBar = () => {
  const [searchResults, setSearchResults] = useState(null)
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    // e.preventDefault();
    dispatch(search(e.target.value))
  };
  return (
    <TextField
      id="standard-search"
      label="Search"
      type="search"
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
