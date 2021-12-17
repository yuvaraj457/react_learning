import {useEffect, useState} from 'react'

export const useCounter = (initialValue, component) => {
const [counter, setCounter] = useState(initialValue)

const handleCounter = () => {
    setCounter(counter+1)
}

useEffect(() => {
    console.log('The', component, 'clicked', counter, 'times')
},[counter, component])

return [counter, handleCounter]
}

