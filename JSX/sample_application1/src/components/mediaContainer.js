import React from 'react'
import PhotoComponent from './photoComponent'
import TaskComponent from './taskComponent'
import VideoComponent from './videoComponent'

const Component = {
    photo : PhotoComponent,
    video : VideoComponent,
    task  : TaskComponent
}

export default function MediaContainer({componentName}) {
    const SpecificComponent = Component[componentName]
    return (
        <>
            <SpecificComponent/>
        </>
    )
}
