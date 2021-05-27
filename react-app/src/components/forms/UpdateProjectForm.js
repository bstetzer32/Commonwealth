import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateProject } from "../../store/project";

export default function UpdateProjectForm() {
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [image_url, setImage] = useState("");
  const [errors, setErrors] = useState({});
  const { projectId } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  const updateTitle = (e) => setTitle(e.target.value);
  const updateTagline = (e) => setTagline(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateGoal = (e) => setGoal(e.target.value);
  const updateImage = (e) => setImage(e.target.value);


    const [project, setProject] = useState({});
    useEffect(() => {
        if (!projectId) {
            return
        }
        (async () => {
            const response = await fetch(`/api/project/${projectId}`);
            const proj = await response.json();
            setTitle(proj.title);
            setTagline(proj.tagline);
            setDescription(proj.description);
            setGoal(proj.goal);
            setImage(proj.image_url);
        })();
    }, [projectId]);

  useEffect(() => {
    let errors = {};
    if (title.length < 5) {
      errors.title = "Title must be more than 5 characters";
    } else if (title.length > 100) {
      errors.title = "Title must be less than 100 characters";
    }
    if (goal < 1) {
      errors.goal = "Please choose a goal greater than 0";
    }
    if (tagline.length > 255) {
      errors.tagline = "Tagline must be less than 255 characters";
    }
    if (description.length > 2000) {
      errors.description = "Description must be less than 2000 characters";
    }
    setErrors(errors);
  }, [title, goal, description]);


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
      id: projectId,
      title,
      tagline,
      description,
      goal,
      image_url,
      user_id,
    };
    await dispatch(updateProject(project));
    history.push(`/projects/${projectId}`);
  };

  return (
    <div className="projectForm">
      <form onSubmit={handleSubmit} className="projectForm">
        <fieldset>
          <legend>Update Your Project</legend>
          <div className="projectForm__input--title projectForm__input">
            <label>
              Title
              {errors.title && (
                <div className="projectForm__error">{errors.title}</div>
              )}
              <input value={title} onChange={updateTitle} required />
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
