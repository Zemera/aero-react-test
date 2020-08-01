import { applyMiddleware, createStore, compose, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import config from 'config';
import rootReducer from './reducer';
import { ApplicationState } from './types';

const loggerMiddleware = createLogger();

const middlewares = [];

middlewares.push(thunkMiddleware);
if (config.env === 'DEV') {
  middlewares.push(loggerMiddleware);
}

const middlewareEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

const enhancers = [middlewareEnhancer];
const composedEnhancers = compose(...enhancers);

const store: Store<ApplicationState> = createStore(
  rootReducer,
  //@ts-ignore
  composedEnhancers
);

export default store;
