import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const ProjectForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState(0);
  const [image, setImage] = useState("");
  const [address_1, setAddress_1] = useState("");
  const [address_2, setAddress_2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState(12345);

  const dispatch = useDispatch();

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
      state,
      zipcode,
    };
  };

  return (
    <div>
      <h1>Create a Project</h1>
      <form onSubmit={handleSubmit} className="projectForm">
        <div className="projectForm__input--title projectForm__input">
          <TextField
            id="margin-normal"
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
            id="margin-normal"
            label="Description"
            margin="normal"
            value={description}
            onChange={setDescription}
          />
        </div>
        <div className="projectForm__input--goal projectForm__input">
          <TextField
            id="margin-normal"
            label="Goal"
            margin="normal"
            type="number"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            value={goal}
            onChange={setGoal}
          />
        </div>
        <div className="projectForm__input--image projectForm__input">
          <TextField
            id="margin-normal"
            label="Image URL"
            margin="normal"
            value={image}
            onChange={setImage}
          />
        </div>
        <div className="projectForm__input--address_1 projectForm__input">
          <TextField
            id="margin-normal"
            label="Street Address"
            margin="normal"
            value={address_1}
            onChange={setAddress_1}
          />
        </div>
        <div className="projectForm__input--address_2 projectForm__input">
          <TextField
            id="margin-normal"
            label="Street Address Line 2"
            margin="normal"
            value={address_2}
            onChange={setAddress_2}
          />
        </div>
        <div className="projectForm__input--city projectForm__input">
          <TextField
            id="margin-normal"
            label="City"
            margin="normal"
            value={city}
            onChange={setCity}
          />
        </div>
        <div className="projectForm__input--state projectForm__input">
          <TextField
            id="margin-normal"
            label="State"
            margin="normal"
            value={state}
            onChange={setState}
          />
        </div>
        <div className="projectForm__input--zipcode projectForm__input">
          <TextField
            id="margin-normal"
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
};

export default ProjectForm;
