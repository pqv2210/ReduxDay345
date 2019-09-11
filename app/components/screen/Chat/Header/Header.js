// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {ImageBackground, View, TouchableOpacity, Text, Image} from 'react-native'
import style from './style'

class Header extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../../assets/Title.png')}
                style={style.imgbg}
            >
                <View style={style.headerbox}>
                    <TouchableOpacity style={style.iconbox}>
                        <Image
                            source={require('../../../../assets/GoBack.png')}
                            style={style.icon}
                        />
                    </TouchableOpacity>
                    <Text style={style.titletext}>SimSim</Text>
                </View>
            </ImageBackground>
        )
    }
}

export default Header