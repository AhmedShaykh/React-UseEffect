import React, { useState, useEffect } from 'react';

const Effect = () => {
    const [num, setNum] = useState(1);
    const [count, setCount] = useState(1);
    const [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        console.log("UseEffect Component Did Mount", num)
    }, [])
    
    useEffect(() => {
        console.log("UseEffect Component Did Update", count)
    }, [count])
    
    useEffect(() => {
        console.log("UseEffect Component Did", toggle)
        return () => console.log("I'm Removed In VDOM")
    }, [count , num , toggle])

    return (
        <div>
            <h1>
                UseEffect
            </h1>
            <h1 className='heading'>{num}</h1>
            <br />
            <button className='button' onClick={() => {
                setNum(num + 1)
            }}>
                Update Num
            </button>
            <br />
            <button className='button' onClick={() => {
                setCount(count + 1)
            }}>
                Update Count
            </button>
            <button className='button' onClick={() => {
                setToggle(!toggle)
            }}>
                Update Toggle
            </button>
        </div>
    )
}

export default Effect;