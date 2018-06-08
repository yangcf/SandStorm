import * as types from './types/amapType'
import NetUtil from '../utils/FetchUtil'
import dataApi from '../../res/dataApi/dataApi'
import { Alert } from 'react-native'



//开启/关闭打卡监控
export function  location(location){
    return dispatch => {

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