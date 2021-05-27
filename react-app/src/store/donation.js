const ADD_ONE = "donations/ADD_ONE";

const add = (donation) => ({
  type: ADD_ONE,
  donation,
});

export const addDonation = (donation) => async (dispatch) => {
  const response = await fetch("/api/donation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(donation),
  });
  const data = await response.json();
  if (data.errors) {
    return;
  }
  dispatch(add(donation));
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

    default:
      return state;
  }
};

export default donationReducer;
