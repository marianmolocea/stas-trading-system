import React from 'react'
import { Input } from 'antd';

const { Search } = Input;

const TickerInput = () => {
    const onSearch =() => {
        console.log('Ticker Search')
    }
    
    return (
        <Search placeholder="Ticker" onSearch={onSearch} style={{ width: 200 }} />
    )
}

export default TickerInput
