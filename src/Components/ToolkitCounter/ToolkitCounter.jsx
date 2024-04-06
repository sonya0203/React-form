import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment } from './IncSlice'

function ToolkitCounter() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const Inc = () => {
        console.log(count)
        dispatch(Increment())
    }
    const Dec = () => {
        dispatch(Decrement())
    }
    return (
        <>
            <div>count: {count}</div>
            <div><button onClick={Inc}>Increment</button></div>
            <div><button onClick={Dec}>Decremrnt</button></div>
        </>
    )
}

export default ToolkitCounter