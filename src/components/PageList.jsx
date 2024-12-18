// PageList.jsx


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
]


const PageList = () => {

    const handleClick = (obj) => {

        console.log('obj : ', obj);
    
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
