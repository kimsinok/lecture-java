
import './App.css'


import { Routes, Route, Link, useNavigate } from 'react-router-dom'; 
import Register from './components/Register';
import Home from './components/Home.jsx';
import NotFound from './components/NotFound';
import View from './components/View';
import Login from './components/Login';
import Search from './components/Search';

const App = () => { 

  const id = 5;


  return (
    <>
      <span> <Link to={'/'}>홈</Link> </span>
      <span> <Link to={'/add'}>회원가입</Link> </span>
      <span> <Link to={`/view/${id}`}>회원조회</Link> </span>
      <span> <Link to={`/login`}>로그인</Link> </span>
      <span> <Link to={`/search?keyfield=web&keyword=react`}>검색</Link> </span>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Register />} />
        <Route path="/view/:no" element={<View />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/search" element={<Search />} />  
        <Route path="*" element={<NotFound />} />
      </Routes>
    
    </>    
  );

}

export default App;
