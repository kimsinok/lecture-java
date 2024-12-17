

// List.jsx

import { useRef } from "react";


const List = () => {

    const users = [
        {
            username: 'Kim',
            age: 10
        } ,
        {
            username: 'Lee',
            age: 10
        } ,
        {
            username: 'Cho',
            age: 10
        } ,
        {
            username: 'Moon',
            age: 10
        } ,
        {
            username: 'Park',
            age: 10
        } 
    ]


    const noRef = useRef(1);  // { current: 1 } 

    const handleClick = (e) => {

        console.log('id : ', e.target.id);
        console.log('content : ', e.target.textContent);

    }

    return (
        <>
            <h3>Users List</h3>
            <ul onClick={handleClick}>
            {
                users.map( (user) => {

                    return (<li id={noRef.current++}>{user.username}</li>)

                })

            }
            </ul>
        </>
    );


}

export default List;