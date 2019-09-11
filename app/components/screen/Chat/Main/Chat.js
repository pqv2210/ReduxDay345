// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {FlatList} from 'react-native'
import style from './style'
import DisplayChat from '../../../DisplayChat/DisplayChat'

class Chat extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            messages: [],
        }
    }

    scrollEnd = () => {
        this.refs.flatList.scrollToEnd()
    }

    renderList = ({item}) => (
        <DisplayChat
            item={item}
        />
    )

    render() {
        return (
            <FlatList
                style={style.flatlist}
                ref='flatList'
                onContentSizeChange={this.scrollEnd}
                data={this.state.messages}
                renderItem={this.renderList}
            />
        )
    }
}

export default Chat