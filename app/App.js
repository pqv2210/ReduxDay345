// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {Provider} from 'react-redux'
import AppContainer from './navigations/AppContainer'
import {PersistGate} from 'redux-persist/lib/integration/react'
import {persistor, store} from './store/store'
import Loading from './components/Loading/Loading'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<Loading/>}
                    persistor={persistor}
                >
                    <AppContainer/>
                </PersistGate>
            </Provider>
        )
    }
}

export default App