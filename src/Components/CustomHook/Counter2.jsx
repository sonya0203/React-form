import React from 'react'
import useCounter from './useCounter';

function Counter2() {
 
    const [count, increment, decrement] = useCounter();

    return (
        <>
            <div>{count}</div>
            <div><button onClickx={increment}>Increment</button></div>
            <div><button onClick={decrement}>Decrement</button></div>
        </>
    );
}

export default Counter2