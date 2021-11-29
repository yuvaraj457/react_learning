import React, { useState } from 'react'
import { about } from '../core/apiCalls'

export default function About() {
    const [content, setContent] = useState('')
    const [ error, setError] = useState(null)
    const handler = () => {
        about()
        .then(({data}) => {setContent(data); setError(null)})
        .catch(error =>{ setError(error.message); setContent('')})
    }
    console.log(error)
    return (
        <div>
            <button onClick={() => handler()}>About</button>
            <p>{content}</p>
            {error && <p>{error}</p>}
        </div>
    )
}
