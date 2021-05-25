const SET_DISCOVERY = 'discovery/'

const setDiscovery = (discovery) => ({
    type: SET_DISCOVERY,
    payload: discovery
});

export const getDiscovery = () => async (dispatch) => {
    const response = await fetch('/api/discovery/',{
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.errors) {
        return;
    }
    dispatch(setDiscovery(data))
  }

const initialState = {}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case SET_DISCOVERY:
            return action.payload
        default:
            return state;
    }
}