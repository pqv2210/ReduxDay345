// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {create} from 'apisauce'

const apiLogin = async (username, password) => {
    const data = {
        phone_number: username,
        password,
        device_token: '1',
        device_os: '1',
        checkVersion: '1',
    }
    const api = await create({baseURL: 'https://api.bonbon24h.com.vn/api/v2/passengers/login'})
    const item = await api.post('', data)
    console.log('item', item)
    return item
}

export default apiLogin