const SET_FEED = 'feed/setFeed';

const setFeed = (feed) => ({
    type: SET_FEED,
    payload: feed
})

export const getFeed = (type, id) => async (dispatch) => {
    const response = await fetch('/api/feed/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type,
        id
      })
    });
    const data = await response.json();
    if (data.errors) {
        return;
    }
    dispatch(setFeed(data))
  }

const initialState = {featured_project: null, new_projects: null, old_projects:null, recommended_projects:null}

export default function reducer(state=initialState, action) {
    const newState = {...state}
    switch (action.type) {
        case SET_FEED:
            return Object.assign(newState, action.payload)
        default:
            return state;
    }
}