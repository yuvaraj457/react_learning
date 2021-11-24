import React from 'react'
import UseCopy from './useCopy'

export default function ContentPage() {
    const [isCopied, handleCopy] = UseCopy(3000)
    const text1 = "Life is too short, Never forget to smile"
    
    return (
        <>
        <h2>{text1}</h2>{isCopied?<i class="fas fa-2x fa-clipboard-check"></i>:<i class="fas fa-2x fa-clipboard" onClick={() => handleCopy(text1)}></i>}
        </>
    )
}
