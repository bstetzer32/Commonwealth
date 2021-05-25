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
            onChange={setTitle}
          />
        </div>
        <div className="projectForm__input--category projectForm__input">
          <Select
            placeholder="Category"
            value={category}
            onChange={setCategory}
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
            onChange={setDescription}
          />
        </div>
        <div className="projectForm__input--goal projectForm__input">
          <TextField
            label="Goal"
            margin="normal"
            type="number"
            value={goal}
            onChange={setGoal}
          />
        </div>
        <div className="projectForm__input--image projectForm__input">
          <TextField
            label="Image URL"
            margin="normal"
            value={image}
            onChange={setImage}
          />
        </div>
        <div className="projectForm__input--address_1 projectForm__input">
          <TextField
            label="Street Address"
            margin="normal"
            value={address_1}
            onChange={setAddress_1}
          />
        </div>
        <div className="projectForm__input--address_2 projectForm__input">
          <TextField
            label="Street Address Line 2"
            margin="normal"
            value={address_2}
            onChange={setAddress_2}
          />
        </div>
        <div className="projectForm__input--city projectForm__input">
          <TextField
            label="City"
            margin="normal"
            value={city}
            onChange={setCity}
          />
        </div>
        <div className="projectForm__input--category projectForm__input">
          <Select placeholder="Category" value={st} onChange={e=> setSt(e.target.value)}>
            {states?.map((state) => (
              <MenuItem key={state.id} value={st}>
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
            onChange={setZipcode}
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
