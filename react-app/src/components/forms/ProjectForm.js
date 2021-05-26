import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getStates } from "../../store/state";
import { createProject } from "../../store/project";

export default function ProjectForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState(0);
  const [image, setImage] = useState("");
  const [address_1, setAddress_1] = useState("");
  const [address_2, setAddress_2] = useState("");
  const [city, setCity] = useState("");
  const [st, setSt] = useState("");
  const [zipcode, setZipcode] = useState(12345);

  const dispatch = useDispatch();
  const history = useHistory();

  const updateTitle = (e) => setTitle(e.target.value);
  const updateCategory = (e) => setCategory(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateGoal = (e) => setGoal(e.target.value);
  const updateImage = (e) => setImage(e.target.value);
  const updateAddress_1 = (e) => setAddress_1(e.target.value);
  const updateAddress_2 = (e) => setAddress_2(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateSt = (e) => setSt(e.target.value);
  const updateZipcode = (e) => setZipcode(e.target.value);

  useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);

  const states = useSelector((state) => {
    return Object.values(state.states);
  });

  const user_id = useSelector((state) => {
    return state.session.user.id;
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const project = {
      title,
      category,
      description,
      goal,
      // image,
      address_1,
      address_2,
      city,
      st,
      zipcode,
      user_id,
    };
    dispatch(createProject(project));
    // history.push("/");
  };

  return (
    <div className="projectForm">
      <form onSubmit={handleSubmit} className="projectForm">
        <fieldset>
          <legend>Create a Project</legend>
          <div className="projectForm__input--title projectForm__input">
            <label>
              Title
              <input value={title} onChange={updateTitle} required />
            </label>
          </div>
          <div className="projectForm__input--category projectForm__input">
            <label>
              Category
              <select value={category} onChange={updateCategory}>
                <option value={""}>--------</option>
                <option value={"Education"}>Education</option>
                <option value={"Sports"}>Sports</option>
              </select>
            </label>
            {console.log("category", category)}
          </div>
          <div className="projectForm__input--description projectForm__input">
            <label>
              Description
              <textarea value={description} onChange={updateDescription} />
            </label>
          </div>
          <div className="projectForm__input--goal projectForm__input">
            <label>
              Goal <input type="number" value={goal} onChange={updateGoal} />
            </label>
          </div>
          <div className="projectForm__input--image projectForm__input">
            <label>
              Image URL
              <input value={image} onChange={updateImage} />
            </label>
          </div>
          <div className="projectForm__input--address_1 projectForm__input">
            <label>
              Street Address
              <input value={address_1} onChange={updateAddress_1} />
            </label>
          </div>
          <div className="projectForm__input--address_2 projectForm__input">
            <label>
              Street Address Line 2
              <input value={address_2} onChange={updateAddress_2} />
            </label>
          </div>
          <div className="projectForm__input--city projectForm__input">
            <label>
              City
              <input value={city} onChange={updateCity} />
            </label>
          </div>
          <div className="projectForm__input--category projectForm__input">
            <label>
              State
              <select value={st} onChange={updateSt}>
                {states?.map((state) => (
                  <option key={state.id} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="projectForm__input--zipcode projectForm__input">
            <label>
              Zip
              <input type="number" value={zipcode} onChange={updateZipcode} />
            </label>
          </div>
          <div className="projectForm__input--submit projectForm__input">
            <button variant="outlined" color="primary" type="submit">
              Create
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
