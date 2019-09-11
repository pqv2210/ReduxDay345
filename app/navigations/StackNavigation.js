// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {createStackNavigator} from 'react-navigation-stack'
import DrawerNavigation from './DrawerNavigation'
import container from '../container/container'

const StackNavigation = createStackNavigator({
    LoginScr: container,
    ChatScr: {
        screen: DrawerNavigation,
        navigationOptions: {
            header: null,
            headerLeft: null,
        }},
})

export default StackNavigation