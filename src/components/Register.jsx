
// Register.jsx

import { useState } from "react";
import ResultModal from "./ResultModal";

const initialState = {
    name: '',
    birth: '',
    country: '',
    bio: ''
}

const Register = () => {

    const [ form, setForm ] = useState({...initialState});  // Rest Parameter

    const [ result, setResult ] = useState(null);

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
        } else if (!form.birth) {
            alert('Enter your birth');
        } else if (!form.country) {
            alert('Enter your country');
        } else if(!form.bio) {
            alert('Enter your bio');
        } else {
            setResult('success');
        }
    }


    const closeModal = () => {
    
        setResult(null);

        console.log('로그인 페이지로 이동');

    }
 


    return(
        <div>
            <div>
                <h3>이름</h3>
                <input type='text'  name={'name'}  placeholder={'이름'} onChange={handleChangeForm} />
            </div>
            <div>
                <h3>생년월일</h3>
                <input type='date' name={'birth'} placeholder={'생년월일'} onChange={handleChangeForm} />
            </div>
            <div>
                <h3>국적</h3>
                <select name='country' onChange={handleChangeForm}>
                    <option></option>
                    <option value='kr'>한국</option>
                    <option value='us'>미국</option>
                    <option value='uk'>영국</option>
                </select>
            </div>
            <div>
                <h3>자기소개</h3>
                <textarea name="bio" onChange={handleChangeForm}></textarea>
            </div>    
            <button onClick={handleClickAdd}>가입</button>

           { result != null ? <ResultModal title={'회원 가입'} content={'회원 가입이 완료되었습니다.'} callbackFn={closeModal} /> : <></> }

        </div>
    );


}



export default Register;