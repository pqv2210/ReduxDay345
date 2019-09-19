// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducer/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/rootSaga'
import {createLogger} from 'redux-logger'
import {persistStore, persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['message', 'status_code'],
    whitelist: ['messages', 'username', 'password'],
    stateReconciler: autoMergeLevel2,
}
const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()
const pReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(pReducer, applyMiddleware(logger, sagaMiddleware))
export const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)