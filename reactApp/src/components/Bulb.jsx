
//Bulb.jsx

import { useState } from "react";

const Bulb = () => {

    const [ light, setLight ] = useState('off'); 

    const handleClick = () => {
        
        setLight( light === 'on' ? 'off' : 'on' );

    }

    return (
        <>
            <div>
               { light === 'on' ? <h1 style={{backgroundColor: 'orange'}}>on</h1>  : <h1 style={{backgroundColor: 'gray'}}>off</h1> } 
            </div>
            <div>
                <button onClick={handleClick}>
                    { light === 'on' ? 'off' : 'on' }    
                </button>
            </div>      
        
        </>
    );

}

export default Bulb;