// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {DELETE_STATE, FETCH_SUCCESS, FETCH_TEXT, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, DELETE_LOGIN} from './types'

export const deleteState = (data) => {
    return {
        type: DELETE_STATE,
        data,
    }
}

export const getDataSuccess = (data) => {
    return {
        type: FETCH_SUCCESS,
        data,
    }
}

export const fetchText = (text) => {
    return {
        type: FETCH_TEXT,
        text,
    }
}

export const loginRequest = (username, password) => {
    return {
        type: LOGIN_REQUEST,
        payload: {
            username,
            password,
        },
    }
}

export const loginSuccess = (message, status_code) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            message,
            status_code,
        },
    }
}

export const loginFailure = (message, status_code) => {
    return {
        type: LOGIN_FAILURE,
        payload: {
            message,
            status_code,
        },
    }
}

export const deleteLogin = (message, status_code) => {
    return {
        type: DELETE_LOGIN,
        payload: {
            message,
            status_code,
        },
    }
}