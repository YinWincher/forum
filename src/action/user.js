import {CREATE_NEW_USER,CHANGE_PASSWORD} from '../constant/ActionTypes'


export const createNewUser = (data)=>{
    return {
        type:CREATE_NEW_USER,
        data
    }
}

export const changePassword = (password)=>{
    return {
        type:CHANGE_PASSWORD,
        password
    }
}

