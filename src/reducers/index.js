import { combineReducers } from 'redux';
import authReducer from './authReducer';
import detailsReducer from './detailsReducer';
import statusReducer from './statusReducer';
export default combineReducers({
  auth: authReducer,
  details: detailsReducer,
  status: statusReducer
});
