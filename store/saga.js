import { all, put, call, takeLatest } from 'redux-saga/effects'

import { actionTypes, requestUsersSuccess, requestUsersError } from '../actions'
import API from '../services/api'

function* getGithubUsersSaga() {
  try {
    const { data: { items } } = yield call(API.get)
    yield put(requestUsersSuccess(items))
  } catch (err) {
    yield put(requestUsersError(err))
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.GET_GITHUB_USERS, getGithubUsersSaga)])
}

export default rootSaga
