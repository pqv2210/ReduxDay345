// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {all} from 'redux-saga/effects'
import watchFetchText from './sagaFetchText'
import watchCheckLogin from './sagaLogin'

export default function* rootSaga() {
    yield all([
        watchFetchText(),
        watchCheckLogin(),
    ])
}