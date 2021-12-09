import { combineReducers } from 'redux';
import splashScreenReducer from './splashScreenReducer';
import welcomeScreenReducer from './welcomeScreenReducer';

export default combineReducers({
  splashScreenReducer: splashScreenReducer,
  welcomeScreenReducer: welcomeScreenReducer,
});
