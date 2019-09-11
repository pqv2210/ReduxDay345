// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {View} from 'react-native'
import Header from './Header/Header'
import Chat from './Main/Chat'
import Bottom from './Bottom/Bottom'

class ChatScr extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }

    render() {
        return (
            <View>
                <Header/>
                <Chat/>
                <Bottom/>
            </View>
        )
    }
}

export default ChatScr