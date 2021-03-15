import { combineReducers } from 'redux';
import login from './auth/login';
import servicesData from './service';

/*
 * Responsible for combining all reducers inside of app
 */
export default combineReducers({
  login,
  servicesData,
});
