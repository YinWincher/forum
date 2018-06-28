import {
    FETCH_FEED_LIST_FAILED,
    FETCH_FEED_LIST_SUCCESS,
    CHANGE_POST_PAGE,
    FETCH_FEED_LIST_START,
    FETCH_FEED_LIST_LEN_SUCCESS
} from '../../constant/ActionTypes';
import * as action from '../feed'

describe('fedd action',()=>{
    test('fetchFeedListStart',()=>{
        const expectAction = {
            type : FETCH_FEED_LIST_START
        }
        expect(action.fetchFeedListStart()).toEqual(expectAction);
    });

    test('fetchFeedListSuccess',()=>{
        const data = '1';
        const expectAction = {
            type : FETCH_FEED_LIST_SUCCESS,
            data
        }
        expect(action.fetchFeedListSuccess(data)).toEqual(expectAction);
    })
    test('fetchFeedListFailed',()=>{
        const error = 'test'
        const expectAction = {
            type : FETCH_FEED_LIST_FAILED,
            error
        }
        expect(action.fetchFeedListFailed(error)).toEqual(expectAction)
    })
    test('fetchFeedListLenSuccess',()=>{
        const data = 'test'
        const expectAction = {
            type : FETCH_FEED_LIST_LEN_SUCCESS,
            data
        }
        expect(action.fetchFeedListLenSuccess(data)).toEqual(expectAction)
    })
    test('changePostPage',()=>{
        const data = 'test'
        const expectAction = {
            type : CHANGE_POST_PAGE,
            data
        }
        expect(action.changePostPage(data)).toEqual(expectAction)
    })
})
