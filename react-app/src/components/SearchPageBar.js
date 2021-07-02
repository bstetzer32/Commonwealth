import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searching } from "../store/search";
import { getStates } from "../store/state";
// const useStyles = makeStyles((theme) => ({
//     root: {
//       ['@media (max-width:719px)']: {

//       }
//     }
//   }
// ))

export default function SearchPageBar() {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("");
  const [st, setSt] = useState("");
  const [city, setCity] = useState("");
  // const [sort, setSort] = useState("");
  const dispatch = useDispatch();

  const updateInput = (e) => setInput(e.target.value);
  const updateCategory = (e) => setCategory(e.target.value);
  const updateSt = (e) => setSt(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  // const updateSort = (e) => setSort(e.target.value);

  useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);

  const states = useSelector((state) => {
    return Object.values(state.states);
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(searching(category, st, city, input));
  };

  return (
    <div className="searchPage__bar">
      <form onSubmit={handleSearch} className="searchPage__form">
        <div className="searchPage__bar--text1 searchPage__bar--element">
          Show me
        </div>
        <div className="searchPage__bar--input searchPage__bar--element">
          <input value={input} onChange={updateInput} />
        </div>
        <div className="searchPage__bar--text2 searchPage__bar--element">
          projects in
        </div>
        <div className="searchPage__bar--category searchPage__bar--element">
          <select value={category} onChange={updateCategory}>
            <option value={""}>All Categories</option>
            <option value={"Education"}>Education</option>
            <option value={"Sports"}>Sports</option>
            <option value={"Transportation"}>Transportation</option>
            <option value={"Music"}>Music</option>
            <option value={"Housing"}>Housing</option>
            <option value={"Volunteer"}>Volunteer</option>
            <option value={"Events"}>Events</option>
            <option value={"Clean Up Initiatives"}>Clean Up Initiatives</option>
            <option value={"Elderly Care"}>Elderly Care</option>
          </select>
        </div>
        <div className="searchPage__bar--text3 searchPage__bar--element">
          in
        </div>
        <div className="searchPage__bar--city searchPage__bar--element">
          <input value={city} onChange={updateCity} />
        </div>
        <div className="searchPage__bar--text4 searchPage__bar--element">,</div>
        <div className="searchPage__bar--state searchPage__bar--element">
          <select value={st} onChange={updateSt}>
            {states?.map((state) => (
              <option key={state.id} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="searchPage__bar--text5 searchPage__bar--element">
          sorted by
        </div>
        <div className="searchPage__bar--sort searchPage__bar--element">
          <select value={sort} onChange={updateSort}>
            <option value={"funded-desc"}>% Funded Desc</option>
            <option value={"funded-asc"}>% Funded Asc</option>
            <option value={"name-desc"}>Name Desc</option>
            <option value={"name-asc"}>Name Asc</option>
          </select>
        </div> */}
        <button
          type="submit"
          className="searchPage__bar--button searchPage__bar--element"
        >
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
