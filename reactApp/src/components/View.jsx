

//View.jsx

import { useParams } from "react-router-dom";


const View = () => {

    const {no} = useParams();  // {no: '20'}

    console.log('id : ', no);  
    

    return (
        <>
            <h1>{no}번째 회원 정보입니다.</h1>
        </>
    )


}

export default View;    