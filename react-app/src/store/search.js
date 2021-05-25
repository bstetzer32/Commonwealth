
const SEARCH_DB = "search/SEARCH_DB"

const searchResult = (result) => ({
  type: SEARCH_DB,
  payload: result
})

export const searching = (input) => async (dispatch) => {
  const response = await fetch('/api/search_route',{
  headers: {
    'Content-Type': 'application/json'
  },
  })
  const results = await response.json()
  if (!results.ok){
    return;
  }
  dispatch(searchResult(results))
}

const initialState = {}
export default function reducer(state=initialState, action) {
  switch(action.type){
    case SEARCH_DB:
      return {...action.payload}
    default:
      return state
  }
}
