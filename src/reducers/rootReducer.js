import { combineReducers } from 'redux';
import { AppNavigator } from '../route/Route';
import loginReducer from './loginReducer';
import {
    createNavigationReducer
  } from 'react-navigation-redux-helpers';

const navReducer = createNavigationReducer(AppNavigator);
export default rootReducer =  combineReducers({
	nav: navReducer,
	loginReducer,
});