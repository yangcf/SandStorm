/**
 * Created by 杨超凡 on 2018/6/4.
 */
import React from 'react';
import { 
    createBottomTabNavigator, 
    createStackNavigator,
    createMaterialTopTabNavigator
} from 'react-navigation'
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Login from '../pages/login/Login'
import FirstPage from '../pages/text/text'
import SecondPage from '../pages/text/text1'

const Tab = createMaterialBottomTabNavigator(
    {
        FirstPage:{
            screen: FirstPage,
        },
        SecondPage:{
            screen: SecondPage,
        },
        thirthPage:{
            screen: SecondPage,
        },
        fourthPage:{
            screen: SecondPage,
        },
    },
    {
        shifting: false,
        activeTintColor: 'red',
        inactiveTintColor: '#828792',
        barStyle: {
          backgroundColor: '#44dddd',
          borderTopWidth: StyleSheet.hairlineWidth,
          borderStyle: 'solid',
          borderColor: '#d0cfd0',
        },
      }
);

const RouteConfigs = {
    Login: {
        screen: Login,
    },
    Tab: Tab,
};

export const StackNavigatorConfig = {
    navigationOptions:{
        header:null,
    },
    initialRouteName: 'Login',
    initialRouteParams: {},
    // paths: './index.js',
    mode: 'card',
    headerMode: 'screen',
    cardStyle: {backgroundColor: "#F5FCFF"},
    transitionConfig: (() => ({
        // screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    })),
    onTransitionStart: (() => {
        // console.log('页面跳转动画开始');
    }),
    onTransitionEnd: (() => {
        // console.log('页面跳转动画结束');
    }),
};

const AppNavigator =  createStackNavigator(RouteConfigs,StackNavigatorConfig);

export { AppNavigator };