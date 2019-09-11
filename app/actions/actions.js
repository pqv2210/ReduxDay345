// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {FETCH, FETCH_FAILURE, FETCH_SUCCESS} from './types'

export const getData = () => {
    return {
        type: FETCH,
    }
}

export const getDataSuccess = (data) => {
    return {
        type: FETCH_SUCCESS,
        data,
    }
}

export const getDataFailure = () => {
    return {
        type: FETCH_FAILURE,
    }
}

export const fetchData = () => {}