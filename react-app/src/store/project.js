// const SET_PROJECT = "project/SET_PROJECT";

// const setProject = (project) => ({
//   type: SET_PROJECT,
//   payload: project
// })

// export const findProject = (id) => async (dispatch) => {
//   const response = await fetch('/api/project/id', {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       category,
//       state,
//       city,
//       inputs
//     })
//   })
//   const results = await response.json()
//   console.log(results)
//   if (!results.ok) {
//     dispatch(searchResult(results))
//   }
// }

// const initialState = {}

// export default function search(state = initialState, action) {
//   switch (action.type) {
//     case SEARCH_DB:
//       let newState = {}
//       action.payload['projects'].forEach((item, i) => {
//         newState[i] = item
//       });
//       return newState
//     default:
//       return state
//   }
// }
