// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {View} from 'react-native'
import LoginScr from '../components/screen/Login/LoginScr'
import {StackActions, NavigationActions} from 'react-navigation'

class container extends React.Component {
    static navigationOptions = {header: null}

    navigateToChat = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'ChatScr'})],
        })
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        return (
            <View>
                <LoginScr
                    navigateToChat={this.navigateToChat}
                />
            </View>
        )
    }
}

export default container