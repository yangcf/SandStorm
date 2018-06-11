import { combineReducers } from 'redux';
import { AppNavigator } from '../route/Route';
import loginReducer from './loginReducer';
import amapReducer from './amapReducer';
import {
    createNavigationReducer
  } from 'react-navigation-redux-helpers';

const navReducer = createNavigationReducer(AppNavigator);
export default rootReducer =  combineReducers({
	nav: navReducer,
  loginReducer,
  amapReducer,
});