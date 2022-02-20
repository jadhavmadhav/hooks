import React, { useState } from 'react'
const State = () => {

    const [like, setLike] = useState(0);

    const Like = () => {
        setLike(like + 1)
    }

    const Dislike = () => {
        setLike(like - 1)

    }
    return (
        <>
            <h1>useState Hooks</h1>
            <div>
                <h3> Count : {like}</h3>
                <button onClick={Like}>Increment</button>
                <button onClick={Dislike}>Decrement</button>
            </div>


        </>
    )
}

export default State