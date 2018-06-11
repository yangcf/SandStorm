import * as types from '../actions/types/amapType'

const initialState={
    localState: false,//定位状态
    //当前定位坐标
    location: {
        latitude: 39.955384086445804,
        longitude: 116.33783608675003,
    },
    alert: true,//提醒标识
    coordinate: {//标记坐标
        latitude: 39.955384086445804,
        longitude: 116.33783608675003,
    },
    contain: false
  };

  export default function amapReducer(state = initialState,action = {}){
        switch(action.type){
            case types.LOCATION_START:
                return {
                    ...state,
                    localState: true,
                }
                break;

            case types.LOCATION_CLOSE:
                return {
                    ...state,
                    localState: false,
                }
                break;
            
            case types.LOCATION_CLOCK_IN:
                return {
                    ...state,
                    alert: false,
                    contain: true
                }
                break;

            case types.LOCATION_DONE:
                return {
                    ...state,
                    coordinate: action.coordinate,
                }
                break;

            case types.LOCATION_UPDATE:
                return {
                    ...state,
                    location: action.location,
                    alert: true,
                    contain: false
                }
                break;
            default:
                return state;
        }
  }