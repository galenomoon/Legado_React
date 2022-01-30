import React, { useState, useEffect } from "react";

export default props => {
    // let counter = 3
    const [counter, setCounter] = useState(100)
    const [status, setParOuImpar] = useState('Par')

    useEffect(() => {
        counter % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Ímpar')
    })

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter+1)}>
                Inc
            </button>
            <h1>{status}</h1>
        </div>
    )
}