// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {DELETE_STATE, FETCH_SUCCESS, FETCH_TEXT} from './types'

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