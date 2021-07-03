import {authTrue, authFalse} from "../ActionTypes";

const defaultState = {
    isAuth: false,
    authToken: null,
    user: null,
    email: null,
    phone_number: null
}

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {

        case authTrue:
            return {
                ...state,
                isAuth: true,
                authToken: action.payload['auth_token'],
                phone_number: action.payload['phone_number'],
                email: action.payload['email'],
                user: action.payload['name']
            }

        case authFalse:
            return defaultState

        default:
            return defaultState;
    }
}