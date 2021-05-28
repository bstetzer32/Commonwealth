import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getStates } from "../../store/state";
import { createProject } from "../../store/project";

export default function ProjectForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [image_url, setImage] = useState("");
  const [address_1, setAddress_1] = useState("");
  const [address_2, setAddress_2] = useState("");
  const [city, setCity] = useState("");
  const [st, setSt] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [errors, setErrors] = useState({});
  const [tagline, setTagline] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const updateTitle = (e) => setTitle(e.target.value);
  const updateCategory = (e) => setCategory(e.target.value);
  const updateTagline = (e) => setTagline(e.target.value);
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

  useEffect(() => {
    let errors = {};
    if (title.length < 5) {
      errors.title = "Title must be more than 5 characters";
    } else if (title.length > 100) {
      errors.title = "Title must be less than 100 characters";
    }
    if (category.startsWith("--")) {
      errors.category = "Please select a category";
    }
    if (goal < 1) {
      errors.goal = "Please choose a goal greater than 0";
    }
    if (description.length > 2000) {
      errors.description = "Description must be less than 2000 characters";
    }
    if (!address_1) {
      errors.address_1 = "Please enter an address";
    }
    if (!city) {
      errors.city = "Please enter a city";
    }
    if (!st) {
      errors.st = "Please select a state";
    }
    if (zipcode.toString().length !== 5) {
      errors.zipcode = "Zipcode must be 5 numbers";
    }
    setErrors(errors);
  }, [title, goal, category, description, address_1, city, st, zipcode]);

  const states = useSelector((state) => {
    return Object.values(state.states);
  });
  const user_id = useSelector((state) => {
    if (state.session.user?.id) {
      return state.session.user.id;
    } else {
      return 1;
    }
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const project = {
      title,
      category,
      tagline,
      description,
      goal,
      image_url,
      address_1,
      address_2,
      city,
      st,
      zipcode,
      user_id,
    };
    dispatch(createProject(project));
    history.push("/");
  };

  return (
    <div className="projectForm">
      <form onSubmit={handleSubmit} className="projectForm">
        <fieldset>
          <legend>Create a Project</legend>
          <div className="projectForm__input--title projectForm__input">
            <label>
              Title
              {errors.title && (
                <div className="projectForm__error">{errors.title}</div>
              )}
              <input value={title} onChange={updateTitle} required />
            </label>
          </div>
          <div className="projectForm__input--category projectForm__input">
            <label>
              Category
              {errors.category && (
                <div className="projectForm__error">{errors.category}</div>
              )}
              <select value={category} onChange={updateCategory} required>
                <option value={""}>--------</option>
                <option value={"Education"}>Education</option>
                <option value={"Sports"}>Sports</option>
                <option value={"Transportation"}>Transportation</option>
                <option value={"Music"}>Music</option>
                <option value={"Housing"}>Housing</option>
                <option value={"Volunteer"}>Volunteer</option>
                <option value={"Events"}>Events</option>
                <option value={"Clean Up Initiatives"}>
                  Clean Up Initiatives
                </option>
                <option value={"Elderly Care"}>Elderly Care</option>
              </select>
            </label>
          </div>
          <div className="projectForm__input--description projectForm__input">
            <label>
              Tagline
              {errors.description && (
                <div className="projectForm__error">{errors.tagline}</div>
              )}
              <input value={tagline} onChange={updateTagline} />
            </label>
          </div>
          <div className="projectForm__input--description projectForm__input">
            <label>
              Description
              {errors.description && (
                <div className="projectForm__error">{errors.description}</div>
              )}
              <textarea value={description} onChange={updateDescription} />
            </label>
          </div>
          <div className="projectForm__input--goal projectForm__input">
            <label>
              Goal
              {errors.goal && (
                <div className="projectForm__error">{errors.goal}</div>
              )}
              <input
                type="number"
                value={goal}
                placeholder="10000"
                onChange={updateGoal}
                required
              />
            </label>
          </div>
          <div className="projectForm__input--image projectForm__input">
            <label>
              Image URL
              <input value={image_url} onChange={updateImage} />
            </label>
          </div>
          <div className="projectForm__input--address_1 projectForm__input">
            <label>
              Street Address
              {errors.address_1 && (
                <div className="projectForm__error">{errors.address_1}</div>
              )}
              <input value={address_1} onChange={updateAddress_1} required />
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
              {errors.city && (
                <div className="projectForm__error">{errors.city}</div>
              )}
              <input value={city} onChange={updateCity} required />
            </label>
          </div>
          <div className="projectForm__input--category projectForm__input">
            <label>
              State
              {errors.st && (
                <div className="projectForm__error">{errors.st}</div>
              )}
              <select value={st} onChange={updateSt} required>
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
              {errors.zipcode && (
                <div className="projectForm__error">{errors.zipcode}</div>
              )}
              <input
                type="number"
                value={zipcode}
                onChange={updateZipcode}
                placeholder="12345"
                required
              />
            </label>
          </div>
          <div className="projectForm__input--submit projectForm__input">
            <button
              className="projectForm__submit"
              type="submit"
              disabled={Object.keys(errors).length}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
