import React from 'react'
import Show from './Show'
import { useDispatch } from 'react-redux'
import { actionCreactor } from './index'
function Redux() {
  const dispatch = useDispatch()
  return (
    <div>
      <Show />
      <button onClick={() => dispatch(actionCreactor.Increment(100))}>Increment</button>

      <button onClick={() => dispatch(actionCreactor.Decrement(100))}>Decrement</button>

    </div>
  )
}

export default Redux