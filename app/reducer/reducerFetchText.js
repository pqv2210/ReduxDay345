// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {
    DELETE_STATE,
    FETCH_SUCCESS,
    FETCH_TEXT,
} from '../actions/types'

const initialState = {
    data: '',
    text: '',
}

export default function reducerFetchText(state = initialState, action) {
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
    case DELETE_STATE:
        return {
            ...state,
            data: '',
        }
    default: return state
    }
}