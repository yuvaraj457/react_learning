import React from 'react'

export default function FruitList({fruits}) {
    return (
        <>
            <ul>
                {fruits.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    )
}
