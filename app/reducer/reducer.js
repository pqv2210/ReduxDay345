// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {FETCH, FETCH_FAILURE, FETCH_SUCCESS} from '../actions/types'

const initialState = {
    data: [],
    isDone: false,
    isFetching: false,
    error: false,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case FETCH:
        return {
            ...state,
            data: [],
            isFetching: true,
        }
    case FETCH_SUCCESS:
        return {
            ...state,
            isFetching: false,
            data: action.data,
        }
    case FETCH_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: true,
        }
    default: return state
    }
}