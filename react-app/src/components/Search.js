import React from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import {searching} from "../store/search"
import {useDispatch} from 'react-redux'
import {useState} from 'react'

const SearchBar = () => {
  const [value, setValue] = useState('')
  const [category, setCategory] = useState(null)
  const [state, setState] = useState(null)
  const [city, setCity] = useState(null)
  const dispatch = useDispatch()

  const handleSearch = () => {
    console.log(value)
    dispatch(searching(category, state, city, value))
  };

  return (
    <TextField
      id="standard-search"
      label="Search"
      type="search"
      onChange={e=> {setValue(e.target.value)}}
      value={value}
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
