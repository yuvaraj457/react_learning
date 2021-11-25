import React from 'react'

export default function BioInfo({bio}) {
    return (
        <>
            <p>{`Hi my name is ${bio.name}, I am from ${bio.place}`}</p>
        </>
    )
}
