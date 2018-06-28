import {
    FETCH_DISCUSSION_SUCCESS, FETCH_DISCUSSION_FAILED,
    GET_POSTID, GET_POST_MESSAGE, FETCH_SINGLE_POST_SUCCESS
} from '../constant/ActionTypes';

const initializeState = {
    postid : 0,
    reply:[]
}
export const discussion = (state=initializeState,action)=>{
    switch (action.type){
        case FETCH_DISCUSSION_SUCCESS:
            return {
                ...state,
                ...action.data
            }
        case FETCH_SINGLE_POST_SUCCESS:
            return {
                ...state,
                ...action.data
            }
        case FETCH_DISCUSSION_FAILED :
            return {
                ...state,
                err:action.data
            }
        case GET_POSTID:
            return {
                ...state,
                postid : action.data
            }
        case GET_POST_MESSAGE:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

