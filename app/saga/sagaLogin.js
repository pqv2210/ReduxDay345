// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {call, put, takeLatest} from '@redux-saga/core/effects'
import apiLogin from '../services/apiLogin'
import {loginFailure, loginSuccess} from '../actions/actions'

export default function* watchCheckLogin() {
    yield takeLatest('LOGIN_REQUEST', callAPItoCheck)
}

function* callAPItoCheck(action) {
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