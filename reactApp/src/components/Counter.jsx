
// Counter.jsx

import { useState } from "react";

const Counter = () => {

    let [ count, setCount ] = useState(0);

    const handleClick = () => {
        setCount(count++);
    }

    return (
        <>
            <div> I clicked {count} times. </div>
            <button onClick={handleClick}>+</button>
        </>
    );


}

export default Counter;