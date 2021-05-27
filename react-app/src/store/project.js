const LOAD = "project/LOAD";
const ADD_ONE = "project/ADD_ONE";


const load = (projects) => ({
  type: LOAD,
  projects,
});

const create = (project) => ({
  type: ADD_ONE,
  project,
});



export const getProjects = () => async (dispatch) => {
  const response = await fetch("/api/project", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (data.errors) {
    return;
  }
  dispatch(load(data));
};

export const createProject = (project) => async (dispatch) => {
  const response = await fetch("/api/project", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }
  dispatch(create(data));
};

export const updateProject = (project) => async (dispatch) => {
  const response = await fetch("/api/project", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }
  dispatch(create(data));
};

export const deleteProject = (id) => async () => {
    await fetch(`/api/project/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  })

}

const initialState = {};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      let newState = { ...state };
      action.projects.forEach((project) => {
        newState[project.id] = project;
      });
      return newState;
    }

    case ADD_ONE: {
      return {
        ...state,
        [action.project.id]: action.project,
      };
    }
    default:
      return state;
  }
};

export default projectReducer;
