import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import ArticleList from './components/ArticleList'
import ArticleWrite from './components/ArticleWrite'
import ArticleView from './components/ArticleView'
import ArticleModify from './components/ArticleModify'



const App = () => {

  return (
    <>
      <div>
        <Link to="/"><span> [게시글 조회] </span></Link>
        <Link to="/write"><span> [게시글 쓰기] </span></Link> 
      </div>

      <Routes>      
          <Route path='/' element={<ArticleList /> } />
          <Route path='/list' element={<ArticleList /> } />
          <Route path='/write' element={<ArticleWrite /> } />
          <Route path='/view/:id' element={<ArticleView /> } />
          <Route path='/modify/:id' element={<ArticleModify /> } />
      </Routes>
    </>
  )

}


export default App
