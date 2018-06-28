import {
    LOGIN_OUT,
    FETCH_CREATE_NEW_USER_START,
    FETCH_CREATE_NEW_USER_SUCCESS,
    FETCH_CREATE_NEW_USER_FAILED, FETCH_LOGIN_IN_START, FETCH_LOGIN_IN_SUCCESS, FETCH_LOGIN_IN_FAILED
} from '../../constant/ActionTypes';
import * as action from '../user'

describe('user action',()=>{
    test('loginOut',()=>{
        const expectAction = {
            type : LOGIN_OUT
        }
        expect(action.loginOut()).toEqual(expectAction);
    });

    test('fetchCreateNewUserStart',()=>{
        const expectAction = {
            type : FETCH_CREATE_NEW_USER_START,
        }
        expect(action.fetchCreateNewUserStart()).toEqual(expectAction);
    })
    test('fetchCreateNewUserSuccess',()=>{
        const data = 'test'
        const expectAction = {
            type : FETCH_CREATE_NEW_USER_SUCCESS,
            data
        }
        expect(action.fetchCreateNewUserSuccess(data)).toEqual(expectAction)
    })
    test('fetchCreateNewUserFailed',()=>{
        const data = 'test'
        const expectAction = {
            type : FETCH_CREATE_NEW_USER_FAILED,
            data
        }
        expect(action.fetchCreateNewUserFailed(data)).toEqual(expectAction)
    })
    test('fetchLoginInStart',()=>{
        const expectAction = {
            type : FETCH_LOGIN_IN_START
        }
        expect(action.fetchLoginInStart()).toEqual(expectAction)
    })
    test('fetchLoginInSuccess',()=>{
        const data = 'test'
        const expectAction = {
            type : FETCH_LOGIN_IN_SUCCESS,
            data
        }
        expect(action.fetchLoginInSuccess(data)).toEqual(expectAction)
    })
    test('fetchLoginInFailed',()=>{
        const data = 'test'
        const expectAction = {
            type : FETCH_LOGIN_IN_FAILED,
            data
        }
        expect(action.fetchLoginInFailed(data)).toEqual(expectAction)
    })
    // test('changePostPage',()=>{
    //     const data = 'test'
    //     const expectAction = {
    //         type : CHANGE_POST_PAGE,
    //         data
    //     }
    //     expect(action.changePostPage(data)).toEqual(expectAction)
    // })
})
