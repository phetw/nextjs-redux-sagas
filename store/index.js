import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer, { initialStates } from '../reducer'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()
const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware, logger))
  }
  return applyMiddleware(...middleware)
}

function configureStore(initialState = initialStates) {
  const store = createStore(rootReducer, initialState, bindMiddleware([sagaMiddleware]))
  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  store.runSagaTask()
  return store
}

export default configureStore
