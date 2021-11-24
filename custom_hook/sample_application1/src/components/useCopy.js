import React, { useEffect, useState } from 'react'
import copy from 'copy-to-clipboard'

export default function UseCopy(interval = null) {
    const [isCopied, setCopy] = useState(false)

    useEffect(() => {
        if(isCopied && interval){
            setTimeout(()=>setCopy(false),interval)
        }
    })

    const handleCopy = (text) => {
        if(typeof text === 'string' || typeof text === 'number'){
            copy(text.toString())
            setCopy(true)
        }
        else{
            setCopy(false)
            console.log('cannot copy')
        }
    }
    return [isCopied, handleCopy]
}
