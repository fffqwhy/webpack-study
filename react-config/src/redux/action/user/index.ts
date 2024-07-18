import { UPDATE_USER_INFO } from "./actionType"

export const setUserInfo = (data:any)=>{
    return {
        type:UPDATE_USER_INFO,
        data:data
    }
}