/**
 * Created by atide on 2016/10/28.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store/Store';
import AppWithNavigationState from './containers/App';

export default class Root extends Component{
    render(){
        return (
            <Provider store={store}>
              <AppWithNavigationState />
            </Provider>
          );
    }
}