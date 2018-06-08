import * as types from './types/loginType'
import NetUtil from '../utils/FetchUtil'
import dataApi from '../../res/dataApi/dataApi'
import { Alert } from 'react-native'

//登陆
export function  login(user){
    return dispatch => {
        dispatch(loginIng());
        NetUtil.postJson(dataApi.login,null,(ret) => {
            //模拟登陆
            if(user.username == 'admin' && user.password == 'admin'){
                dispatch(loginSuccess());
            }else{
                Alert.alert('用户名或密码错误');
                dispatch(loginError());
            }
        },(err) => {
            Alert.alert('登陆出错，请检查网络连接！');
            dispatch(loginError());
            console.log(err);
        },()=>{});
    }
}

const loginSuccess = () => {
    return {
        type: types.LOGIN_SUCCESS,
    }
}

const loginError = () => {
    return {
        type: types.LOGIN_ERROR
    }
}

const loginIng = () => {
    return {
        type: types.LOGIN_ING
    }
}

//登出
export function logout(){
    return {
      type:types.LOGOUT
    };
  }