import {
    FETCH_FEED_LIST_FAILED,
    FETCH_FEED_LIST_SUCCESS,
    CHANGE_POST_PAGE,
    FETCH_FEED_LIST_START,
    FETCH_FEED_LIST_LEN_SUCCESS
} from '../constant/ActionTypes';


export const fetchFeedListStart = () => ({
    type: FETCH_FEED_LIST_START
});

export const fetchFeedListSuccess = (data) => ({
    type: FETCH_FEED_LIST_SUCCESS,
    data
})

export const fetchFeedListFailed = (error) => ({
    type: FETCH_FEED_LIST_FAILED,
    error
})
export const fetchFeedList = (url) => {
    return async (dispatch) => {
        dispatch(fetchFeedListStart())
        try{
            const res = await fetch(url);
            if(res.status!==200){
                throw new Error('Fail to get response with status ' + res.status);
            }
            const resJson = await res.json();
            if(resJson){
                dispatch(fetchFeedListSuccess(resJson.data))
            }
        }catch (e) {
            dispatch(fetchFeedListFailed(e))
        }
    };
}

export const fetchFeedListLenSuccess = (data)=>{
    return {
        type : FETCH_FEED_LIST_LEN_SUCCESS,
        data
    }
}
export const fetchFeedListLen = (url)=> {
    return async (dispatch) => {
        try {
            const res = await fetch(url);
            if (res.status !== 200) {
                throw new Error('Fail to get response with status ' + res.status);
            }
            const resJson = await res.json();
            if (resJson) {
                dispatch(fetchFeedListLenSuccess(resJson.data))
            }
        } catch (e) {
            dispatch(fetchFeedListFailed(e))
        }
    }
}

export const changePostPage = (data)=>{
    return {
        type:CHANGE_POST_PAGE,
        data
    }
}




