import React from 'react'
import { createPortal } from 'react-dom'

export default function PortalModal({message, isOpen, close}) {
    if(!isOpen){
        return null
    }
    const portalStyle = {
        backgroundColor : 'rgba(0,0,0,0.5)',
        position : 'fixed',
        top : 0,
        left : 0,
        height: '100%',
        width: '100%',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
      }
    return createPortal(
        <div style={portalStyle}>
            <p>{message}</p>
            <button onClick={close}>close</button>
        </div>,
        document.body
    )
    
}
