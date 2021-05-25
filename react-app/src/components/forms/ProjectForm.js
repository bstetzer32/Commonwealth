import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { getStates } from "../../store/state";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const project = {
      title,
      description,
      goal,
      image,
      address_1,
      address_2,
      city,
      st,
      zipcode,
    };
  };

  return (
    <div>
      <h1>Create a Project</h1>
      <form onSubmit={handleSubmit} className="projectForm">
        <div className="projectForm__input--title projectForm__input">
          <TextField
            label="Title"
            margin="normal"
            value={title}
            onChange={updateTitle}
          />
        </div>
        <div className="projectForm__input--category projectForm__input">
          <Select
            placeholder="Category"
            value={category}
            onChange={updateCategory}
          >
            {/* iterate on return of query to db of categories to create MenuItem */}
            <MenuItem value={1}>Education</MenuItem>
            <MenuItem value={2}>Sports</MenuItem>
          </Select>
        </div>
        <div className="projectForm__input--description projectForm__input">
          <TextField
            label="Description"
            margin="normal"
            value={description}
            onChange={updateDescription}
          />
        </div>
        <div className="projectForm__input--goal projectForm__input">
          <TextField
            label="Goal"
            margin="normal"
            type="number"
            value={goal}
            onChange={updateGoal}
          />
        </div>
        <div className="projectForm__input--image projectForm__input">
          <TextField
            label="Image URL"
            margin="normal"
            value={image}
            onChange={updateImage}
          />
        </div>
        <div className="projectForm__input--address_1 projectForm__input">
          <TextField
            label="Street Address"
            margin="normal"
            value={address_1}
            onChange={updateAddress_1}
          />
        </div>
        <div className="projectForm__input--address_2 projectForm__input">
          <TextField
            label="Street Address Line 2"
            margin="normal"
            value={address_2}
            onChange={updateAddress_2}
          />
        </div>
        <div className="projectForm__input--city projectForm__input">
          <TextField
            label="City"
            margin="normal"
            value={city}
            onChange={updateCity}
          />
        </div>
        <div className="projectForm__input--category projectForm__input">
          <Select placeholder="Category" value={""} onChange={updateSt}>
            {states?.map((state) => (
              <MenuItem key={state.id} value={state.name}>
                {state.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="projectForm__input--zipcode projectForm__input">
          <TextField
            label="Zip"
            margin="normal"
            type="number"
            value={zipcode}
            onChange={updateZipcode}
          />
        </div>
        <div className="projectForm__input--submit projectForm__input">
          <Button variant="outlined" color="primary" type="submit">
            Create
          </Button>
        </div>
      </form>
    </div>
  );
}
