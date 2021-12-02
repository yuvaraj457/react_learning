import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

export const PortalWrapper = ({children}) => {

    const portalRoot = document.getElementById('portalRoot')
    const el = document.createElement('div')

    useEffect(() => {
        portalRoot.appendChild(el)
        // return () => portalRoot.removeChild(el)
    }, [el, portalRoot])


    return createPortal(children, el)
    
}
