import React from 'react'
import { useCounter } from './counter'

export default function SecondComponent() {
    const [counter, handleCount] = useCounter(0, 'Second Component')
    return (
        <div>
            <button onClick={() => handleCount()}>Click ME</button>
            <h2>{counter}</h2>
        </div>
    )
}
