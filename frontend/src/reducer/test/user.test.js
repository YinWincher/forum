import {user} from '../../reducer/user'
import * as types from '../../constant/ActionTypes'
import {FETCH_FEED_LIST_LEN_SUCCESS} from "../../constant/ActionTypes";
import {CHANGE_POST_PAGE} from "../../constant/ActionTypes";
import {FETCH_DISCUSSION_SUCCESS} from "../../constant/ActionTypes";
import {GET_POST_MESSAGE} from "../../constant/ActionTypes";
import {GET_POSTID} from "../../constant/ActionTypes";
import {FETCH_DISCUSSION_FAILED} from "../../constant/ActionTypes";
import {FETCH_SINGLE_POST_SUCCESS} from "../../constant/ActionTypes";
import {LOGIN_OUT} from "../../constant/ActionTypes";
import {FETCH_CREATE_NEW_USER_SUCCESS} from "../../constant/ActionTypes";
import {FETCH_LOGIN_IN_SUCCESS} from "../../constant/ActionTypes";
import {FETCH_LOGIN_IN_FAILED} from "../../constant/ActionTypes";
import {FETCH_CREATE_NEW_USER_FAILED} from "../../constant/ActionTypes";

describe('user reducer', () => {

    test('should handle LOGIN_OUT', () => {
        expect(
            user({}, {
                type: types.LOGIN_OUT,
                data: {

                }
            })
        ).toEqual(
            {

            }
        );
    });
    test('should handle FETCH_CREATE_NEW_USER_SUCCESS', () => {
        expect(
            user({}, {
                type: types.FETCH_CREATE_NEW_USER_SUCCESS,
                data: {
                    account : '123'
                }
            })
        ).toEqual(
            {
                account : '123'
            }
        );
    });
    test('should handle FETCH_LOGIN_IN_SUCCESS', () => {
        expect(
            user({}, {
                type: types.FETCH_LOGIN_IN_SUCCESS,
                data: {
                    account : '123'
                }
            })
        ).toEqual(
            {
                account : '123'
            }
        );
    });
    test('should handle FETCH_LOGIN_IN_FAILED', () => {
        expect(
            user({}, {
                type: types.FETCH_LOGIN_IN_FAILED,
                data: {
                    message : 'error'
                }
            })
        ).toEqual(
            {
                error:'error'
            }
        );
    })
    test('should handle FETCH_CREATE_NEW_USER_FAILED', () => {
        expect(
            user({}, {
                type: types.FETCH_CREATE_NEW_USER_FAILED,
                data: {
                    message : 'error'
                }
            })
        ).toEqual(
            {
                error:'error'
            }
        );
    })
})