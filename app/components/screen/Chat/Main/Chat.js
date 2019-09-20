// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {FlatList, Image, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Keyboard} from 'react-native'
import style from './style'
import DisplayChat from '../../../DisplayChat/DisplayChat'
import {fetchText, deleteState} from '../../../../actions/actions'
import {connect} from 'react-redux'

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            text: '',
            messages: [],
            isChecking: false,
        }
    }

    scrollEndList = () => {
        this.refs.flatList.scrollToEnd()
    }

    renderList = ({item}) => (
        <DisplayChat
            item={item}
        />
    )

    getValue = (text) => {
        this.setState({text})
    }

    clearTextInput = () => {
        this.textinput.clear()
    }

    sendMessage = () => {
        const {text, messages} = this.state
        if (text !== '') {
            const item = {
                text,
                user: {
                    id: 1,
                    avatar: 'https://mymodernmet.com/wp/wp-content/uploads/2019/07/russian-blue-cats-17.jpg',
                },
            }
            const arr = messages.concat(item)
            this.setState({
                messages: arr,
                isChecking: true,
            })
            this.clearTextInput()
            Keyboard.dismiss()
            this.props.sendMsg(text)
            this.props.resetData(this.state.data)
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.data && prevState.isChecking) {
            const item = {
                text: nextProps.data,
                user: {
                    id: 2,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWa039kQciNVVQ-AXImAVEcZce1Kib7TalX-x5irmDuj0RF7lXlA',
                },
            }
            const arr = prevState.messages.concat(item)
            return {
                messages: arr,
                isChecking: false,
            }
        }
        return null
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding'>
                <View style={style.flatlist}>
                    <FlatList
                        ref='flatList'
                        onContentSizeChange={this.scrollEndList}
                        data={this.state.messages}
                        renderItem={this.renderList}
                    />
                </View>
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
                        ref={(ref) => {
                            this.textinput = ref
                        }}
                        multiline={true}
                        numberOfLine={4}
                        placeholder='Text Massage'
                        onChangeText={this.getValue}
                    />
                    <Image
                        style={style.shape}
                        source={require('../../../../assets/Shape.png')}
                    />
                    <View style={style.button}>
                        <TouchableOpacity
                            style={style.iconbox}
                            onPress={this.sendMessage}
                        >
                            <Image
                                style={style.icon}
                                source={require('../../../../assets/Send.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.reducerFetchText.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: (text) => dispatch(fetchText(text)),
        resetData: (data) => dispatch(deleteState(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)