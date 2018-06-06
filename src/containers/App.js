/**
 * Created by atide on 2016/10/28.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Navigator,
    BackAndroid,
    Platform
} from 'react-native';
import {
    createNavigationPropConstructor,
    initializeListeners,
} from 'react-navigation-redux-helpers';
import { AppNavigator } from '../route/Route'
import { connect } from 'react-redux';


const navigationPropConstructor = createNavigationPropConstructor("root");

class App extends Component{
    componentDidMount() {
        initializeListeners("root", this.props.nav);
    }
    
    render() {
        const navigation = navigationPropConstructor(
            this.props.dispatch,
            this.props.nav,
        );
        return <AppNavigator navigation={navigation} />;
    }
}

const styles = StyleSheet.create({
    navigator:{
        flex:1,
        backgroundColor:'white'
    }
});

const mapStateToProps = (state) => ({
    nav: state.nav,
});
  
export default AppWithNavigationState = connect(mapStateToProps)(App);