

const SEARCH_DB = "search/SEARCH_DB";

const searchResult = (result) => ({
  type: SEARCH_DB,
  payload: result
})

export const searching = (category, state, city, inputs) => async (dispatch) => {
  const response = await fetch('/api/search/', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      category,
      state,
      city,
      inputs
    })
  })
  const results = await response.json()
  console.log(results)
  if (!results.ok) {
    dispatch(searchResult(results))
  }
}

const initialState = {}

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_DB:
      let newState = {}
      action.payload['projects'].forEach((item, i) => {
        newState[i] = item
      });
      return newState
    default:
      return state
  }
}
