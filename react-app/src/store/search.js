const SEARCH_DB = "search/SEARCH_DB";

const searchDB = (input) => ({
    type: SEARCH_DB,
    payload: input
})

const initialState = { searchResults: null}

export const search = () => async (dispatch) => {
    const response = await fetch('/api/auth/', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const searchResults = await response.json();
    // not sure about this conditional
    if (!searchResults.ok) {
        return;
    }
    dispatch(searchDB(searchResults))
}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case SEARCH_DB:
            return {searchResults: action.payload}
        default:
            return state;
    }
}
