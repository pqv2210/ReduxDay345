// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {View} from 'react-native'
import Header from './Header/Header'
import Chat from './Main/Chat'

class ChatScr extends React.Component {
    render() {
        return (
            <View>
                <Header/>
                <Chat/>
            </View>
        )
    }
}

export default ChatScr