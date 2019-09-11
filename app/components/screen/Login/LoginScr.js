// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import Header from './Header/Header'
import Login from './Main/Login'

class LoginScr extends Component {
    navigateToChat = () => {
        this.props.navigateToChat()
    }

    render() {
        return (
            <ScrollView>
                <Header/>
                <Login
                    navigateToChat={this.navigateToChat}
                />
            </ScrollView>
        )
    }
}

export default LoginScr