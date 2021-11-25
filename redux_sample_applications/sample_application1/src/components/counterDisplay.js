import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrement, increment } from './action/counterAction'


export default function CounterDisplay() {
    const buttonStyle = {
        padding : '5px 8px'
    }
    const displayStyle = {
        margin : '0px 20px'
    }

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(increment())} style={buttonStyle}>+</button>
            <span style={displayStyle}>{count}</span>
            <button onClick={() => dispatch(decrement())} style={buttonStyle}>-</button>
        </div>
    )
}
