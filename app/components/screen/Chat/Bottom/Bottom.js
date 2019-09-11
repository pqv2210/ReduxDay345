// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {View, Image, TextInput, TouchableOpacity} from 'react-native'
import style from './style'

class Bottom extends React.Component {
    render() {
        return (
            <View style={style.box}>
                <TouchableOpacity style={style.iconbox}>
                    <Image
                        style={style.icon}
                        source={require('../../../../assets/Plus.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={style.iconbox}>
                    <Image
                        style={style.icon}
                        source={require('../../../../assets/Smile.png')}
                    />
                </TouchableOpacity>
                <TextInput
                    style={style.textinput}
                    multiline={true}
                    numberOfLine={10}
                    placeholder='Text Massage'
                />
                <Image
                    style={style.shape}
                    source={require('../../../../assets/Shape.png')}
                />
                <View style={style.button}>
                    <TouchableOpacity
                        style={style.iconbox}
                    >
                        <Image
                            style={style.icon}
                            source={require('../../../../assets/Send.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Bottom