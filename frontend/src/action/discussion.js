import {FETCH_CREATE_REPLY_SUCCESS,FETCH_SINGLE_POST_SUCCESS,
    FETCH_DISCUSSION_FAILED, FETCH_DISCUSSION_SUCCESS,
    GET_POST_MESSAGE, GET_POSTID,FETCH_DELETE_REPLY_SUCCESS} from "../constant/ActionTypes";

export const fetchCreateReply = (url)=> {
    return async (dispatch) => {
        try {
            const res = await fetch(url);
            if (res.status !== 200) {
                throw new Error('Fail to get response with status ' + res.status);
            }
            const resJson = await res.json();
            if (resJson) {
                dispatch(fetchDiscussionSuccess(resJson.data))
            }
        } catch (e) {
            dispatch(fetchDiscussionFailed(e))
        }
    }
}
export const fetchSinglePostSuccess = (data)=>{
    return {
        type:FETCH_SINGLE_POST_SUCCESS,
        data
    }
}
export const fetchSinglePost = (url)=>{
    return async (dispatch) => {
        try {
            const res = await fetch(url);
            if (res.status !== 200) {
                throw new Error('Fail to get response with status ' + res.status);
            }
            const resJson = await res.json();
            if (resJson) {
                dispatch(fetchSinglePostSuccess(resJson.data))
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export const getPostid = (data)=>{
    return {
        type : GET_POSTID,
        data
    }
}
export const getPostMessage = (data)=>{
    return {
        type : GET_POST_MESSAGE,
        data
    }
}

export const fetchDiscussionFailed = (data)=>{
    return {
        type:FETCH_DISCUSSION_FAILED,
        data
    }
}
export const fetchDiscussionSuccess = (data)=>{
    return {
        type:FETCH_DISCUSSION_SUCCESS,
        data
    }
}

export const fetchDiscussion = (url)=> {
    return async (dispatch) => {
        try {
            const res = await fetch(url);
            if (res.status !== 200) {
                throw new Error('Fail to get response with status ' + res.status);
            }
            const resJson = await res.json();
            if (resJson) {
                dispatch(fetchDiscussionSuccess(resJson.data))
            }
        } catch (e) {
            dispatch(fetchDiscussionFailed(e))
        }
    }
}

