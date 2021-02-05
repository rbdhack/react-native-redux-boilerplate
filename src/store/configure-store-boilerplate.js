import {
 applyMiddleware, createStore, compose, combineReducers,
} from 'redux';
import { routerReducer } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

export default (
  reducers,
  sagas,
  initialState = {},
  additionalMiddleware = [],
  clearStateActionName,
) => {
  const appReducer = combineReducers({
    routing: routerReducer,
    ...reducers,
  });

  const rootSaga = function* rootSaga() {
    yield all([...sagas]);
  };

  const sagaMiddleware = createSagaMiddleware();

  let middleware = [
    sagaMiddleware,
    ...additionalMiddleware,
  ];

  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, createLogger({ collapsed: true })];
  }

  const composeEnhancers = (process.env.NODE_ENV !== 'production'
      && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    || compose;

  const store = createStore(
    (state, action) => {
      // allows us to reset state
      if (action.type === clearStateActionName) {
        const newState = appReducer({}, {}); // eslint-disable-line
        return {
          ...newState,
          content: state.content,
          browser: { ...state.browser, loading: false },
        };
      }
      return appReducer(state, action);
    },
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
