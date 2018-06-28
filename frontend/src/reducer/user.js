import {
    FETCH_CREATE_NEW_USER_SUCCESS,
    FETCH_CREATE_NEW_USER_FAILED,
    FETCH_LOGIN_IN_SUCCESS,
    FETCH_LOGIN_IN_FAILED,
    LOGIN_OUT
} from '../constant/ActionTypes';
export const user = (state = {},action)=>{
    switch (action.type){
        case LOGIN_OUT:
            return {
            }
        case FETCH_CREATE_NEW_USER_SUCCESS:
            return {
                ...state,
                ...action.data
            }
        case FETCH_LOGIN_IN_SUCCESS:
            return {
                ...state,
                ...action.data
            }
        case FETCH_LOGIN_IN_FAILED:
            return {
                ...state,
                error : action.data.message
            }
        case FETCH_CREATE_NEW_USER_FAILED:
            return {
                ...state,
                error : action.data.message
            }
        default:
            return {
                ...state
            }
    }
}