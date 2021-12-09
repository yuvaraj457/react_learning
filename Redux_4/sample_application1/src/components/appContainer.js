import React from 'react'

export default function AppContainer({tasks}) {
    return (
        <div>
            <ol>
                { tasks.map((item, index) => <li key={index}>{item.title}</li>)}
            </ol>
        </div>
    )
}
