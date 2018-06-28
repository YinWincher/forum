import {discussion} from '../../reducer/discussion'
import * as types from '../../constant/ActionTypes'
import {FETCH_FEED_LIST_LEN_SUCCESS} from "../../constant/ActionTypes";
import {CHANGE_POST_PAGE} from "../../constant/ActionTypes";
import {FETCH_DISCUSSION_SUCCESS} from "../../constant/ActionTypes";
import {GET_POST_MESSAGE} from "../../constant/ActionTypes";
import {GET_POSTID} from "../../constant/ActionTypes";
import {FETCH_DISCUSSION_FAILED} from "../../constant/ActionTypes";
import {FETCH_SINGLE_POST_SUCCESS} from "../../constant/ActionTypes";

describe('discussion reducer', () => {
    test('should return the initial state', () => {
        expect(
            discussion(undefined, {})
        ).toEqual({
            postid : 0,
            reply:[]
        });
    })
    test('should handle FETCH_DISCUSSION_SUCCESS', () => {
        expect(
            discussion({}, {
                type: types.FETCH_DISCUSSION_SUCCESS,
                data: {
                    reply : [123]
                }
            })
        ).toEqual(
            {
                reply: [123]
            }
        );
    });
    test('should handle FETCH_SINGLE_POST_SUCCESS', () => {
        expect(
            discussion({}, {
                type: types.FETCH_SINGLE_POST_SUCCESS,
                data: {
                    reply : [123]
                }
            })
        ).toEqual(
            {
                reply: [123]
            }
        );
    });
    test('should handle FETCH_DISCUSSION_FAILED', () => {
        expect(
            discussion({}, {
                type: types.FETCH_DISCUSSION_FAILED,
                data: [1,2,3]
            })
        ).toEqual(
            {
                err: [1,2,3]
            }
        );
    });
    test('should handle GET_POSTID', () => {
        expect(
            discussion({}, {
                type: types.GET_POSTID,
                data: 3
            })
        ).toEqual(
            {
                postid:3
            }
        );
    })
    test('should handle GET_POST_MESSAGE', () => {
        expect(
            discussion({}, {
                type: types.GET_POST_MESSAGE,
                data: {
                    reply : [1,2,3]
                }
            })
        ).toEqual(
            {
                reply:[1,2,3]
            }
        );
    })
})