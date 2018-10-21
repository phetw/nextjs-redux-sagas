export const actionTypes = {
  GET_GITHUB_USERS: 'GET_GITHUB_USERS',
  GET_GITHUB_USERS_SUCCESS: 'GET_GITHUB_USERS_SUCCESS',
  GET_GITHUB_USERS_ERROR: 'GET_GITHUB_USERS_ERROR'
}

export function requestUsers() {
  return {
    type: actionTypes.GET_GITHUB_USERS,
    loading: true
  }
}

export function requestUsersSuccess(data) {
  return {
    type: actionTypes.GET_GITHUB_USERS_SUCCESS,
    data
  }
}

export function requestUsersError(error) {
  return {
    type: actionTypes.GET_GITHUB_USERS_ERROR,
    error
  }
}
