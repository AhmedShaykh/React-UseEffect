import React, { useEffect, useState } from 'react';

const Effect = () => {

    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log("Component Render On Everytime ", count)
    });

    // Did Mount
    useEffect(() => {
        console.log("Component Render On First Time ", count)
    }, []);

    // Did Update
    useEffect(() => {
        console.log("Component Render On Updated ", count)
    }, [count]);

    // Did UnMount
    useEffect(() => {
        return () => {
            console.log("Component Render On Delete Component! ", count)
        }
    }, []);

    return (
        <div>
            <h1>
                React UseEffect
            </h1>
            <h3 className='heading'>{count}</h3>
            <button className='button' onClick={() => setCount(count + 1)}>Update Effect</button>
        </div>
    )
}

export default Effect;