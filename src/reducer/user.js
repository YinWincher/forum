import {CREATE_NEW_USER} from '../constant/ActionTypes';
export const user = (state = {},action)=>{
    switch (action.type){
        case CREATE_NEW_USER:
            return {
                ...state,
                user:{
                    ...action.data
                }
            }
    }
}