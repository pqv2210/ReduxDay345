// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {View, ActivityIndicator} from 'react-native'
import style from './style'

class Loading extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <ActivityIndicator
                    size='large'
                    color='#b30619'
                />
            </View>
        )
    }
}

export default Loading