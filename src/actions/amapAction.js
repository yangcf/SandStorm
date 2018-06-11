import * as types from './types/amapType'
import NetUtil from '../utils/FetchUtil'
import dataApi from '../../res/dataApi/dataApi'
import { Alert,Vibration } from 'react-native'



//开启/关闭打卡监控
export function  location(localState){
    return dispatch => {
        if(localState){
            dispatch(locationClose());
        }else{
            dispatch(locationStart());
        }
    }
}

//实时定位回调,判断打卡范围
export function  onLocation(location,alert){
    return dispatch => {
        etGreatCircleDistance(location.lat1,location.lng1,location.lat2,location.lng2,(s)=>{
            console.log(s);
                if(s>=150&s<=200){
                    if(alert==true){
                        Alert.alert("进入打卡范围，请记得打卡！");
                        Vibration.vibrate([0, 500, 1000, 500],false);
                        dispatch(locationClockIn());
                    }
                }else{
                    dispatch(locationUpdate(location));
                }
        });
    }
}

//marker定位回调
export function markerOnDragEnd(location){
    return dispatch => {
        dispatch(markerOnDragEnd(location));
    }
}


//开启定位监控
const locationStart = () => {
    return {
        type: types.LOCATION_START,
    }
}
//关闭定位监控
const locationClose = () => {
    return {
        type: types.LOCATION_CLOSE
    }
}
//打卡提醒
const locationClockIn = () => {
    return {
        type: types.LOCATION_CLOCK_IN
    }
}
//处于选定坐标范围内
const locationContain = () => {
    return {
        type: types.LOCATION_CONTAIN
    }
}

//更新实时坐标
const locationUpdate = (location) => {
    return {
        type: types.LOCATION_UPDATE,
        location: {
            latitude: location.lat1,
            longitude: location.lng1,
        }
    }
}

//更新marker坐标
const markerOnDragEnd = (location) => {
    return {
        type: types.LOCATION_DONE,
        coordinate: location
    }
}

const EARTH_RADIUS = 6378137.0;    //单位M
const PI = Math.PI;                //PI

function getRad(d){
    return d*PI/180.0;
}

/**
 * 计算两地距离
 */
function etGreatCircleDistance(lat1,lng1,lat2,lng2,callback){
    let radLat1 = getRad(lat1);
    let radLat2 = getRad(lat2);
    
    let a = radLat1 - radLat2;
    let b = getRad(lng1) - getRad(lng2);
    
    let s = 2*Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) + Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
    s = s*EARTH_RADIUS;
    s = Math.round(s*10000)/10000.0;
    callback(s);
}