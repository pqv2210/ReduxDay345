// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    shapes: {
        flexDirection: 'row-reverse',
    },
    shapesback: {
        flexDirection: 'row',
    },
    shape: {
        height: '105%',
        width: '105%',
    },
    flatlist: {
        flexDirection: 'row-reverse',
    },
    flatlistback: {
        flexDirection: 'row',
    },
    button: {
        flexDirection: 'row',
        height: 40,
        width: '20%',
        marginLeft: 20,
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    talkBubbleSquare: {
        width: 'auto',
        height: 'auto',
        backgroundColor: '#639f85',
        borderRadius: 10,
        maxWidth: 200,
    },
    talkBubbleSquareBack: {
        width: 'auto',
        height: 'auto',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginLeft: -15,
        maxWidth: 260,
    },
    talkBubbleSquareBackLoading: {
        width: 50,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginLeft: -15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    triangleCornerRight: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 35,
        borderTopWidth: 35,
        borderRightColor: 'transparent',
        borderTopColor: '#619f69',
        marginLeft: -15,
    },
    triangleCornerLeft: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 35,
        borderTopWidth: 35,
        borderRightColor: 'transparent',
        borderTopColor: '#FFFFFF',
        transform: [
            {rotate: '90deg'},
        ],
    },
    textInFlatListRight: {
        fontSize: 18,
        margin: 10,
        color: '#FFFFFF',
    },
    textInFlatListLeft: {
        fontSize: 18,
        margin: 10,
    },
    icon: {
        height: 25,
        width: 25,
        margin: 3,
    },
})

export default style