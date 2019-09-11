// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Text, Image, ActivityIndicator} from 'react-native'
import style from './style'

class DisplayChat extends Component {
    render() {
        const {item} = this.props
        if (item.user.id === 1) {
            return (
                <View style={style.flatlist}>
                    <Image
                        source={{uri: item.user.avatar}}
                        style={style.avatar}
                    />
                    <View style={style.shapes}>
                        <View style={style.triangleCornerRight}/>
                        <View style={style.talkBubbleSquare}>
                            <Text style={style.textInFlatListRight}>{item.text}</Text>
                        </View>
                    </View>
                </View>
            )
        }
        if (item.user.id === 2) {
            return (
                <View style={style.flatlistback}>
                    <Image
                        source={{uri: item.user.avatar}}
                        style={style.avatar}
                    />
                    <View style={style.shapesback}>
                        <View style={style.triangleCornerLeft}/>
                        <View style={style.talkBubbleSquareBack}>
                            <Text style={style.textInFlatListLeft}>{item.text}</Text>
                        </View>
                    </View>
                </View>
            )
        }
        if (item.user.id === 3) {
            return (
                <View style={style.flatlistback}>
                    <Image
                        source={{uri: item.user.avatar}}
                        style={style.avatar}
                    />
                    <View style={style.shapesback}>
                        <View style={style.triangleCornerLeft}/>
                        <View style={style.talkBubbleSquareBackLoading}>
                            <ActivityIndicator
                                size='small'
                                color='#9F2926'
                            />
                        </View>
                    </View>
                </View>
            )
        }
    }
}

export default DisplayChat