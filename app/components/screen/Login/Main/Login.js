// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {View, Image, Text, TouchableOpacity, TextInput, ActivityIndicator, Alert, AsyncStorage} from 'react-native'
import style from './style'
import {connect} from 'react-redux'
import {deleteLogin, loginRequest} from '../../../../actions/actions'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            message: '',
            isLoading: false,
            status_code: '',
            isChecking: false,
        }
    }

    getValueUsername = (text) => this.setState({username: text})

    getValuePassword = (text) => this.setState({password: text})

    rememberUser = () => {
        AsyncStorage.setItem('username', this.state.username)
        AsyncStorage.setItem('password', this.state.password)
    }

    getremembedUser = async () => {
        const username = await AsyncStorage.getItem('username')
        const password = await AsyncStorage.getItem('password')
        this.setState({username, password})
    }

    navigateToChat = () => {
        const {username, password, message, status_code} = this.state
        this.setState({
            isLoading: true,
            isChecking: true,
        })
        this.rememberUser()
        this.props.checkLogin(username, password)
        this.props.resetLogin(message, status_code)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.status_code !== 200 && prevState.isChecking && nextProps.message) {
            Alert.alert(nextProps.message)
            return {
                isLoading: false,
                isChecking: false,
            }
        }
        if (nextProps.status_code === 200 && prevState.isChecking && nextProps.message) {
            console.log('login.59')
            nextProps.navigateToChat()
            return {
                isLoading: false,
                isChecking: false,
            }
        }
        return null
    }

    componentDidMount() {
        this.getremembedUser()
    }

    render() {
        const loginbtn = (
            <TouchableOpacity
                style={style.touch}
                onPress={this.navigateToChat}
            >
                <Text style={style.touchtext}>Login</Text>
            </TouchableOpacity>
        )
        const loadingview = (
            <View style={style.touch}>
                <ActivityIndicator
                    size='small'
                    color='#00ff00'
                />
            </View>
        )
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
                        onChangeText={this.getValueUsername}
                        value={this.state.username}
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
                        onChangeText={this.getValuePassword}
                        value={this.state.password}
                    />
                </View>
                <View style={style.separator}/>
                {this.state.isLoading ? loadingview : loginbtn}
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

function mapStateToProps(state) {
    return {
        username: state.reducer.username,
        password: state.reducer.password,
        message: state.reducer.message,
        status_code: state.reducer.status_code,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkLogin: (username, password) => dispatch(loginRequest(username, password)),
        resetLogin: (message, status_code) => dispatch(deleteLogin(message, status_code)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)