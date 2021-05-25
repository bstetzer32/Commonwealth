
const SEARCH_DB = "search/SEARCH_DB";

const searchResult = (result) => ({
  type: SEARCH_DB,
  payload: result
})

export const searching = (category, state, city, input) => async (dispatch) => {
  console.log("in the action")
  const response = await fetch('/api/search/', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      category,
      state,
      city,
      input
    })
  })
  const results = await response.json()
  console.log(results)
  if (!results.ok) {
    return;
  }
  console.log('here'
  )
  dispatch(searchResult(results))
}

const initialState = {}

export default function search(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case SEARCH_DB:
      return { ...action.payload }
    default:
      return state
  }
}
