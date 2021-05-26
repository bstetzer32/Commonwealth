import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchPageBar from "./SearchPageBar";

export default function SearchPage() {
  return (
    <div>
      <SearchPageBar />
    </div>
  );
}
