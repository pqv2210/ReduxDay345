// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {
    DELETE_LOGIN,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
} from '../actions/types'

const initialState = {
    username: '',
    password: '',
    message: '',
    status: '',
}

export default function reducerLogin(state = initialState, action) {
    switch (action.type) {
    case LOGIN_REQUEST:
        return {
            ...state,
            username: action.payload.username,
            password: action.payload.password,
        }
    case LOGIN_SUCCESS:
        return {
            ...state,
            message: action.payload.message,
            status_code: action.payload.status_code,
        }
    case LOGIN_FAILURE:
        return {
            ...state,
            message: action.payload.message,
            status_code: action.payload.status_code,
        }
    case DELETE_LOGIN:
        return {
            ...state,
            message: '',
            status_code: '',
        }
    default: return state
    }
}