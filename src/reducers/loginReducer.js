import * as types from '../actions/types/loginType'

const initialState={
    isLoggedIn: false,//是否登陆
    user:{},
    status: null,//done:已登陆,doing:正在登陆,null:未登陆
  };

  export default function loginReducer(state = initialState,action = {}){
        switch(action.type){
            case types.LOGIN_SUCCESS:
                return {
                    ...state,
                    isLoggedIn: true,
                    user: action.user,
                    status: 'done',
                }
                break;

            case types.LOGIN_ING:
                return {
                    ...state,
                    isLoggedIn: false,
                    status: 'doing',
                }
                break;
            
            case types.LOGIN_ERROR:
                return {
                    ...state,
                    isLoggedIn: false,
                    status:'null'
                }
                break;

            case types.LOGOUT:
                return {
                    ...state,
                    isLoggedIn: false,
                    status: 'null'
                }
                break;
            
            default:
                return state;
        }
  }
