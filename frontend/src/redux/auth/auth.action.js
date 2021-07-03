import {authTrue, authFalse} from "../ActionTypes";

export const setAuthTrue = (data) => {
    return {
        type: authTrue,
        payload: data
    }
}

export const setAuthFalse = () => {
    return {
        type: authFalse,
        payload: null
    }
}