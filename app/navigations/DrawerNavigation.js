// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {createDrawerNavigator} from 'react-navigation-drawer'
import ChatScr from '../components/screen/Chat/ChatScr'
import InfoScr from '../components/screen/Info/InfoScr'

const DrawerNavigation = createDrawerNavigator(
    {
        ChatScr,
        InfoScr,
    },
    {
        contentComponent: InfoScr,
    })

export default DrawerNavigation