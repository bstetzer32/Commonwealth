const ADD_ONE = "donations/ADD_ONE";
const LOAD = "donations/LOAD";

const add = (donation) => ({
  type: ADD_ONE,
  donation,
});

const load = (donations) => ({
  type: LOAD,
  donations,
});

export const addDonation = (donation, id) => async (dispatch) => {
  const response = await fetch("/api/donation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(donation, id),
  });
  const data = await response.json();
  if (data.errors) {
    return;
  }
  dispatch(add(donation));
};

export const loadDonations = (id) => async (dispatch) => {
  const response = await fetch(`/api/project/${id}/donations`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const donations = await response.json();
  if (donations.errors) {
    return;
  }
  await dispatch(load(donations));
};

const initialState = {};

const donationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE: {
      return {
        ...state,
        [action.donation.id]: action.donation,
      };
    }

    case LOAD: {
      return {
        ...state,
        donations: action.donations,
      };
    }

    default:
      return state;
  }
};

export default donationReducer;
