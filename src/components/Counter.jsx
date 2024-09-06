import React, { useEffect, useState } from 'react';

function Counter() {

    let [count, setCount] = useState(0);

    useEffect(() => {
        let oldCount = JSON.parse(localStorage.getItem('count'))
        setCount(oldCount) 
    }, [setCount]);

    let increment = () => {
        let newCount = count + 1;
        setCount(newCount);
        localStorage.setItem('count', JSON.stringify(newCount));
    };

    let decrement = () => {
        let newCount = count - 1;
        setCount(newCount);
        localStorage.setItem('count', JSON.stringify(newCount));
    };

    return (
        <div className='m-5'>
            <h1>Counter : {count}</h1>
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={decrement}>
                Decrement
            </button>
        </div>
    );
}

export default Counter;
