import react, { useReducer, useState } from 'react'

import MyReducer from './MyReducer'
const Reducer = () => {
    const [state, dispatch] = useReducer(MyReducer, 0)

    return (
        <>
            <h1> useReducer Hooks</h1>
            <div>
                <h3>Count : {state}</h3>
                <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
                <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
            </div>
        </>
    )
}
export default Reducer