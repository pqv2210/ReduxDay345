// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {
    DELETE_LOGIN,
    DELETE_STATE,
    FETCH_SUCCESS,
    FETCH_TEXT,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
} from '../actions/types'

const initialState = {
    data: '',
    text: '',
    item: '',
    username: '',
    password: '',
    message: '',
    status: '',
    messages: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case FETCH_SUCCESS:
        return {
            ...state,
            data: action.data,
        }
    case FETCH_TEXT:
        return {
            ...state,
            text: action.text,
        }
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
    case DELETE_STATE:
        return {
            ...state,
            data: '',
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