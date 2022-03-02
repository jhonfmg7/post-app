import { CLEAN_MESSAGE, LOGIN_START, LOGIN_START_ERROR, LOGIN_START_SUCCESS, LOGOUT_START, LOGOUT_START_ERROR, LOGOUT_START_SUCCESS } from "../types";

const initialState = {
    user: null,
    authenticated: null,
    loading: false,
    message: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
        case LOGOUT_START:
            return {
                ...state,
                message: null,
                loading: true
            }
        case LOGIN_START_SUCCESS:
            return {
                ...state,
                user: action.payload.profileObj,
                authenticated: true,
                message: "Sesión Iniciada",
                loading: false
            }
        case LOGOUT_START_SUCCESS:
            return {
                ...state,
                user: null,
                authenticated: false,
                message: "Sesión Cerrada",
                loading: false
            }
        case LOGIN_START_ERROR:
        case LOGOUT_START_ERROR:
            return {
                ...state,
                user: null,
                authenticated: false,
                message: action.payload.error,
                loading: false
            }
        case CLEAN_MESSAGE:
            return {
                ...state,
                message: null
            }
        default:
            return state;
    }
}