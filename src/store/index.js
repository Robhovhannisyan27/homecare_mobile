import reducers from '../reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

/** Responsible for creating app store connected to Redux, thunk as a middleware for handling api calls
 */
export const store = createStore(reducers, applyMiddleware(thunk, logger));
// export const store = createStore(reducers, applyMiddleware(thunk));
