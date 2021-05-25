const LOAD = "states/LOAD";

const load = (states) => {
  return {
    type: LOAD,
    payload: states,
  };
};

export const getStates = () => async (dispatch) => {
  const response = await fetch("/api/state", {
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

const initialState = {};

export default function states(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return action.payload;

    default:
      return state;
  }
}
