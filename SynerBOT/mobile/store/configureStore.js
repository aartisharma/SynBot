import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducer';


export default function configureStore(initialState) {
  // Use this logger for debugging
  const logger = createLogger();
  const middleware = applyMiddleware(thunk, logger);

  // use this statement while release app
  // const middleware = applyMiddleware(thunk);

  const createStoreWithMiddleware = compose(middleware);
  const store = createStoreWithMiddleware(createStore)(rootReducer, initialState);
  return store;
}
