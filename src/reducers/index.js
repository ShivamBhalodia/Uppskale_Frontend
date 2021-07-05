import { combineReducers } from 'redux';
import authReducer from './authReducer';
import detailsReducer from './detailsReducer';
import statusReducer from './statusReducer';
import screenReducer from './screenReducer';
import jdReducer from './jdReducer';
export default combineReducers({
  auth: authReducer,
  details: detailsReducer,
  status: statusReducer,
  screen: screenReducer,
  jd:jdReducer
});
