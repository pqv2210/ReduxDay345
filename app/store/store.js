// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducer/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/rootSaga'
import {createLogger} from 'redux-logger'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

// const persistConfig = {
//     key: 'root',
//     storage,
//     stateReconciler: autoMergeLevel2,
// }
const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()
// const pReducer = persistReducer(persistConfig, rootReducer)
// export const store = createStore(pReducer, applyMiddleware(logger, sagaMiddleware))
// export const persistor = persistStore(store)
// sagaMiddleware.run(rootSaga)

export const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware))
sagaMiddleware.run(rootSaga)