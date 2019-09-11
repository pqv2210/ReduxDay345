// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {View, Text, Image} from 'react-native'
import style from './style'

class Header extends React.Component {
    render() {
        return (
            <View style={style.header}>
                <Image
                    source={require('../../../../assets/loginui.png')}
                    style={style.imgbg}
                />
                <Text style={style.textchat}>SimSim</Text>
            </View>
        )
    }
}

export default Header