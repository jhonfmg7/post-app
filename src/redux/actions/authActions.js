import { CLEAN_MESSAGE, LOGIN_START, LOGIN_START_ERROR, LOGIN_START_SUCCESS, LOGOUT_START, LOGOUT_START_ERROR, LOGOUT_START_SUCCESS } from "../types";
import axiosClient from "../../config/axiosClient";
import headerToken from "../../config/headerToken";

const cleanMessage = () => ({
    type: CLEAN_MESSAGE
});

export function LoginAction(validate, response) {
    return async(dispatch) => {
        dispatch(loginStart());

        if (validate) {
            dispatch(loginStartSuccess(response));
        } else {
            dispatch(loginStartError(response));
        }

        setTimeout(() => {
            dispatch(cleanMessage());
        }, 3000);
    }
}

const loginStart = () => ({
    type: LOGIN_START
});

const loginStartSuccess = (data) => ({
    type: LOGIN_START_SUCCESS,
    payload: data
});

const loginStartError = (error) => ({
    type: LOGIN_START_ERROR,
    payload: error
});

export function logoutAction(validate, response) {
    return async(dispatch) => {
        dispatch(logoutStart());

        if (validate) {
            dispatch(logoutStartSuccess(response));
        } else {
            dispatch(logoutStartError(response));
        }

        setTimeout(() => {
            dispatch(cleanMessage());
        }, 3000);
    }
}

const logoutStart = () => ({
    type: LOGOUT_START
});

const logoutStartSuccess = (data) => ({
    type: LOGOUT_START_SUCCESS,
    payload: data
});

const logoutStartError = (error) => ({
    type: LOGOUT_START_ERROR,
    payload: error
});