// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {takeLatest, put, call} from 'redux-saga/effects'
import apiFetch from '../services/apiFetch'
import {getDataSuccess, loginFailure, loginSuccess} from '../actions/actions'
import apiLogin from '../services/apiLogin'

export function* watchFetchText() {
    yield takeLatest('FETCH_TEXT', fetchTextFromAPI)
}

export function* fetchTextFromAPI(action) {
    const {text} = action
    const data = yield call(apiFetch, text)
    yield put(getDataSuccess(data))
}

export function* watchCheckLogin() {
    yield takeLatest('LOGIN_REQUEST', callAPItoCheck)
}

export function* callAPItoCheck(action) {
    const {username, password} = action.payload
    const item = yield call(apiLogin, username, password)
    if (item.data.status_code === 200) {
        const {message, status_code} = item.data
        yield put(loginSuccess(message, status_code))
    } else {
        const {message, status_code} = item.data
        yield put(loginFailure(message, status_code))
    }
}