
// Register.jsx

import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
import { useNavigate } from "react-router-dom";

const initialState = {
    name: '',
    birth: '',
    country: '',
    bio: ''
}

const Register = () => {

    const navigate = useNavigate();

    const [ form, setForm ] = useState({...initialState});  // Rest Parameter

    const [ result, setResult ] = useState(null);

    const nameRef = useRef();

    const birthRef = useRef();
    
    const countryRef = useRef();
    
    const bioRef = useRef();
    
   

    const handleChangeForm = (e) => {

        // form[e.target.name] = e.target.value;
        // setForm({...form});

        setForm({
            ...form,
            [e.target.name]: e.target.value 
        })
    
    }

    const handleClickAdd = () => {

        if (!form.name) { 
            alert('Enter your name');
            nameRef.current.focus();
        } else if (!form.birth) {
            alert('Enter your birth');
            birthRef.current.focus();
        } else if (!form.country) {
            alert('Enter your country');
            countryRef.current.focus();
        } else if(!form.bio) {
            alert('Enter your bio');
            bioRef.current.focus();
        } else {
            setResult('success');
        }
    }



    const closeModal = () => {    

        setResult(null);
        navigate({pathname: '/login'}, {replace: true});    
        
    }
 


    return (
        <div>
            <div>
                <h3>이름</h3>
                <input type='text' ref={nameRef} name={'name'}  placeholder={'이름'} onChange={handleChangeForm} />
            </div>
            <div>
                <h3>생년월일</h3>
                <input type='date' ref={birthRef} name={'birth'} placeholder={'생년월일'} onChange={handleChangeForm} />
            </div>
            <div>
                <h3>국적</h3>
                <select name='country' onChange={handleChangeForm} ref={countryRef}>
                    <option></option>
                    <option value='kr'>한국</option>
                    <option value='us'>미국</option>
                    <option value='uk'>영국</option>
                </select>
            </div>
            <div>
                <h3>자기소개</h3>
                <textarea ref={bioRef} name="bio" onChange={handleChangeForm}></textarea>
            </div>    
            <button onClick={handleClickAdd}>가입</button>

           { result != null ? <ResultModal title={'회원 가입'} content={'회원 가입이 완료되었습니다.'} callbackFn={closeModal} /> : <></> }

        </div>
    );

}



export default Register;