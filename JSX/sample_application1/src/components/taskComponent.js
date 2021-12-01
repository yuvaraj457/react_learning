import React from 'react'

function Task(props) {
    let items = []
    for (let i = 1; i <= props.num; i++) {
        items.push(props.children(i))
    }
    return (
       <>
       {items}
       </>
    )
}

export default function TaskComponent() {
    return (
        <>
            <Task num={10}>
                {(num) => <p key={num}>Task {num} is Completed</p>}
            </Task>
        </>
    )
}
