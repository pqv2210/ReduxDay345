// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
const apiFetch = async (text) => {
    const req = await fetch(`http://ghuntur.com/simsim.php?lc=en&deviceId=&bad0=&txt=${text}`)
    const res = await req.text()
    const data = res.trim()
    return data
}

export default apiFetch
