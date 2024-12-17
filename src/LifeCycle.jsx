//LifeCycle.jsx

import { useEffect, useState } from "react";


const LifeCycle = () => {
    
    let [ count, setCount ] = useState(0);

    // 컴포넌트가 마운트 될때
    useEffect(() => {

        console.log('컴포넌트가 마운트 될때')


    }, [])


    // 컴포넌트가 리렌더링 될때
    useEffect(() => {

        console.log('컴포넌트가 리렌더링 될때')


    }, [count])


    return (
        <>
            <div>{count}</div>    
            <button onClick={() => {setCount(count++);}}>Click</button>
        </>
    );


}


export default LifeCycle;