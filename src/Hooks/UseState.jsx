import React, { useState } from 'react';

const State = () => {
    const [arr, setArr] = useState(["Tesla"]);

    const handleClick = () => {
        setArr([...arr, "SpaceX", "Bitcoin", "StarLink", "Dogecoin"]);
    }
    return (
        <div className='App'>
            <h1>React Hooks</h1>
            <ol>
                {arr.map((v, i) => {
                    return <li key={i}>{v}</li>
                })}
            </ol>
            <button className='button' onClick={handleClick}>Update Value</button>
        </div>
    )
}

export default State;