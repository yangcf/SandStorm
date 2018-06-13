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
import Home from '../pages/home/Home'
import Amap from '../containers/Amap'
import Account from '../containers/Account'


const Tab = createMaterialBottomTabNavigator(
    {
        Home:{
            screen: Home,
        },
        thirthPage:{
            screen: FirstPage,
        },
        fourthPage:{
            screen: FirstPage,
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
    Amap: {
        screen: Amap,
    },
    Account: {
        screen: Account
    }
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