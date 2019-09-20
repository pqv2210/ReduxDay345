// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {combineReducers} from 'redux'
import reducerFetchText from './reducerFetchText'
import reducerLogin from './reducerLogin'

const rootReducer = combineReducers({
    reducerFetchText,
    reducerLogin,
})

export default rootReducer