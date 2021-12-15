import React from 'react'

export default function Modal({message, isOpen, close}) {
    if (!isOpen){
        return null
    }
    return (
        <div>
            <p>{message}</p>
            <button onClick={close}>close</button>
        </div>
    )
}
