<<<<<<< HEAD
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import detailsReducer from './detailsReducer';
import statusReducer from './statusReducer';
export default combineReducers({
  auth: authReducer,
  details: detailsReducer,
  status: statusReducer
});
=======
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
>>>>>>> 221b84f1509a26e946bcb591c22d3c038670249d
