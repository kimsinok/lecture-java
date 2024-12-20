// PageList.jsx

import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";


const pages = [
    {page: 1, size: 10},
    {page: 2, size: 10},
    {page: 3, size: 10},
    {page: 4, size: 10},
    {page: 5, size: 10},
    {page: 6, size: 10},
    {page: 7, size: 10},
    {page: 8, size: 10},
    {page: 9, size: 10},
    {page: 10, size: 10}
];


const PageList = () => {

    const [ page, setPage] = useState(1);

    const navigate = useNavigate();

    useEffect(() => {
        
        // api 요청
        console.log('API 요청 page ', page);


    }, [page])


    const handleClick = (obj) => {

        console.log('obj : ', obj);  //   {page: 2, size: 10}

        setPage(obj.page);

        const queryStr = createSearchParams(obj).toString();
        
        console.log('queryStr : ', queryStr);  //  page=2&size=10

        navigate({
            pathname: '/list',
            search: queryStr
        })
    
    }

    return (
        <>
        <div>
        {
            pages.map((obj, index) => {

                return (<span key={index} style={{cursor: 'pointer'}} onClick={() => {handleClick(obj);}}> {obj.page} </span>);

            })
        }
        </div>          
        </>
    )


}



export default PageList;
