import {CHANGE_POST_PAGE,FETCH_FEED_LIST_LEN_SUCCESS,FETCH_FEED_LIST_SUCCESS} from '../constant/ActionTypes';

const initializeState = {
    discussions: [],
    nowPage : 1,
    postCount:1
}
export const feed = (state=initializeState,action)=>{
    switch (action.type){
        case FETCH_FEED_LIST_SUCCESS:
            return {
                ...state,
                discussions : action.data
            }
        case FETCH_FEED_LIST_LEN_SUCCESS :
            return {
                ...state,
                postCount:action.data
            }
        case CHANGE_POST_PAGE:
            return {
                ...state,
                nowPage : action.data
            }
        default:
            return state;
    }
}

