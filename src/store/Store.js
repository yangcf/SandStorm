'use strict';

import { 
    createStore, 
    applyMiddleware, 
    combineReducers,
} from 'redux'
import {
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer'
import { composeWithDevTools } from 'remote-redux-devtools';

// const composeEnhancers = composeWithDevTools({ realtime: true,hostname: 'localhost',port: 8000 });
const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
const logger = createLogger();
const store = createStore(
    rootReducer,
    // composeEnhancers(applyMiddleware(middleware,thunk,logger))
    applyMiddleware(middleware,thunk,logger)
);
export default store;