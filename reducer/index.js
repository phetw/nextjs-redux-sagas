import { actionTypes } from '../actions'

export const initialStates = {
  users: [],
  error: false,
  loading: true
}

function reducer(state = initialStates, action) {
  switch (action.type) {
    case actionTypes.GET_GITHUB_USERS:
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_GITHUB_USERS_SUCCESS:
      return {
        ...state,
        ...{ users: action.data, loading: false }
      }
    case actionTypes.GET_GITHUB_USERS_ERROR:
      return {
        ...state,
        ...{ error: action.error, loading: false }
      }
    default:
      return state
  }
}

export default reducer
