import React, { useReducer } from 'react'
const initialState = 0
const reducer = (count, action) => {

  switch (action.type) {
    case "Increment":
      return count + 1
      break;
    case "Decrement":
      return count - 1
      break;
    default:
      return count
  }
}
function UseReduce() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <div>count:{count}</div>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>

    </>
  )
}

export default UseReduce





