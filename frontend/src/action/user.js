import {
    FETCH_CREATE_NEW_USER_FAILED,
    FETCH_CREATE_NEW_USER_START,
    FETCH_CREATE_NEW_USER_SUCCESS,
    FETCH_CHANGE_PASSWORD_FAILED,
    FETCH_LOGIN_IN_START,
    FETCH_LOGIN_IN_SUCCESS,
    LOGIN_OUT,
    FETCH_LOGIN_IN_FAILED
} from '../constant/ActionTypes'

export const errorHandle = {
    'account dot not exists' : ()=>{
        alert('账号不存在');
    },
    'error password': ()=>{
        alert('密码错误')
    },
    'account has exists': ()=>{
        alert('账号已经存在');
    },
    'wrong question' : ()=>{
        alert('错误的问题');
    },
    'wrong answer' : ()=>{
        alert('错误的答案')
    },
    'wrong password':()=>{
        alert('错误的密码')
    }


}

export const loginOut = ()=>{
    return {
        type : LOGIN_OUT
    }
}

export const fetchCreateNewUserStart = () => ({
    type: FETCH_CREATE_NEW_USER_START
});
export const fetchCreateNewUserSuccess = (data) => ({
    type: FETCH_CREATE_NEW_USER_SUCCESS,
    data
})

export const fetchCreateNewUserFailed = (data) => ({
    type: FETCH_CREATE_NEW_USER_FAILED,
    data
})

export const fetchCreateNewUser = (data)=>{
    return async (dispatch)=>{
        dispatch(fetchCreateNewUserStart());
        try{
            const url = '/api/user'
            const res = await fetch(url,{
                method : 'POST',
                body : JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            });

            if(!res.status.toString().match(/^2/)){
                const resJson = await res.json();
                errorHandle[resJson.message]();
                throw new Error(resJson.message);
            }
            dispatch(fetchCreateNewUserSuccess({account:data.account}));
        }catch (e) {
            dispatch(fetchCreateNewUserFailed(e))
        }
    }
}

export const fetchLoginInStart = ()=>({
    type:FETCH_LOGIN_IN_START
})
export const fetchLoginInSuccess = (data)=>({
    type:FETCH_LOGIN_IN_SUCCESS,
    data
})
export const fetchLoginInFailed = (data)=>({
    type:FETCH_LOGIN_IN_FAILED,
    data
});

export const fetchLoginIn = (data)=>{
    return async (dispatch)=>{
        dispatch(fetchLoginInStart());
        try{
            const url = '/api/user/validate'
            const res = await fetch(url,{
                method : 'POST',
                body : JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            });
            if(!res.status.toString().match(/^2/)){
                const resJson = await res.json();
                errorHandle[resJson.message]();
                throw new Error(resJson.message);
            }
            dispatch(fetchLoginInSuccess({account:data.account}));
        }catch (e) {
            dispatch(fetchLoginInFailed(e))
        }
    }
}

// export const fetchChangePasswordStart = ()=>({
//     type : FETCH_CHANGE_PASSWORD_START
// })
// export const fetchChangePasswordSuccess = (data)=>({
//     type : FETCH_CHANGE_PASSWORD_SUCCESS,
//     data
// })
// export const fetchChangePasswordFailed = (data)=>({
//     type : FETCH_CHANGE_PASSWORD_FAILED,
//     data
// })
// export const fetchChangePassword = (data)=>{
//     return async (dispatch)=>{
//         dispatch(fetchChangePasswordStart());
//         try{
//             const url = '/api/user'
//             const res = await fetch(url,{
//                 method : 'POST',
//                 body : JSON.stringify(data),
//                 headers: new Headers({
//                     'Content-Type': 'application/json'
//                 })
//             });
//             console.log(res);
//             if(!res.status.toString().match(/^2/)){
//
//                 throw new Error('Fail to get response with status ' + res.status);
//             }
//             dispatch(fetchChangePasswordSuccess({account:data.account}));
//         }catch (e) {
//             dispatch(fetchCreateNewUserFailed(e))
//         }
//     }
// }


