// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {takeLatest, put, call} from 'redux-saga/effects'
import apiFetch from '../services/apiFetch'
import {getDataSuccess} from '../actions/actions'

export default function* watchFetchText() {
    yield takeLatest('FETCH_TEXT', fetchTextFromAPI)
}

function* fetchTextFromAPI(action) {
    const {text} = action
    const data = yield call(apiFetch, text)
    yield put(getDataSuccess(data))
}