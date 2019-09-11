// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {View, Image, Text, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native'
import style from './style'
import {NavigationActions, StackActions} from 'react-navigation'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
        }
    }

    navigateToChat = () => {
        this.props.navigateToChat()
    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.separator2}/>
                <View style={style.box}>
                    <Image
                        resizeMode='cover'
                        style={style.iconemail}
                        source={require('../../../../assets/Mail.png')}
                    />
                    <TextInput
                        style={style.textinput}
                        placeholder='Email'
                    />
                </View>
                <View style={style.separator}/>
                <View style={style.box}>
                    <Image
                        style={style.iconkey}
                        source={require('../../../../assets/Key.png')}
                    />
                    <TextInput
                        style={style.textinput}
                        secureTextEntry={true}
                        placeholder='Password'
                    />
                </View>
                <View style={style.separator}/>
                <TouchableOpacity
                    style={style.touch}
                    onPress={this.navigateToChat}
                >
                    <Text style={style.touchtext}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={style.textforgot}>FORGOT PASSWORD?</Text>
                </TouchableOpacity>
                <View style={style.separator1}/>
                <View style={style.bottom}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity>
                        <Text style={style.textsignup}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Login