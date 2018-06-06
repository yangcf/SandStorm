/**
 * Created by 杨超凡 on 2018/6/4.
 */
import React from 'react';
import { 
    createBottomTabNavigator, 
    createStackNavigator,
    createMaterialTopTabNavigator
} from 'react-navigation'
import Login from '../pages/login/Login'
import FirstPage from '../pages/text/text'
import SecondPage from '../pages/text/text1'

const Tab = createMaterialTopTabNavigator(
    {
        FirstPage:{
            screen: FirstPage,
        },
        SecondPage:{
            screen: SecondPage,
        },
    },
    {
        initialRouteName: 'FirstPage',
        activeTintColor: '#f0edf6',
        inactiveTintColor: '#3e2465',
        tabBarOptions: {
            labelStyle: {
              fontSize: 12,
            },
            tabStyle: {
            },
            style: {
            //   backgroundColor: 'blue',
            },
          },
        barStyle: { backgroundColor: '#694fad' },
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