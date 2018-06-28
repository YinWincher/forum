import {feed} from '../../reducer/feed'
import * as types from '../../constant/ActionTypes'
import {FETCH_FEED_LIST_LEN_SUCCESS} from "../../constant/ActionTypes";
import {CHANGE_POST_PAGE} from "../../constant/ActionTypes";

describe('feed reducer', () => {
    test('should return the initial state', () => {
        expect(
            feed(undefined, {})
        ).toEqual({
                discussions: [],
                nowPage : 1,
                postCount:1
            });
    })

    test('should handle FETCH_FEED_LIST_SUCCESS', () => {
        expect(
            feed({}, {
                type: types.FETCH_FEED_LIST_SUCCESS,
                data: [1,2,3]
            })
        ).toEqual(
            {
                discussions: [1,2,3]
            }
        );
    });
    test('should handle FETCH_FEED_LIST_LEN_SUCCESS', () => {
        expect(
            feed({}, {
                type: types.FETCH_FEED_LIST_LEN_SUCCESS,
                data: 3
            })
        ).toEqual(
            {
                postCount:3
            }
        );
    })
    test('should handle CHANGE_POST_PAGE', () => {
        expect(
            feed({}, {
                type: types.CHANGE_POST_PAGE,
                data: 3
            })
        ).toEqual(
            {
                nowPage : 3,
            }
        );
    })
})