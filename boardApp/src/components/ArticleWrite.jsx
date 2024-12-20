
import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'
import { postArticle } from '../api/article';
import ResultModal from './ResultModal';
import { replace, useNavigate } from 'react-router-dom';

const initialState = {
    title: '',
    writer: '',
    contents: ''
}

const ArticleWrite = () => {

    const [article, setArticle] = useState({...initialState});

    const [result, setResult] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setArticle({
            ...article,
            [e.target.name]: e.target.value
        })
    }


    const handleClickSave = () => {

        if (article.title == '') {
            alert('제목을 입력하세요');
        } else if (article.writer == '') {
            alert('작성자를 입력하세요');
        } else if (article.contents == '') {
            alert('내용을 입력하세요');
        } else {        
            if (confirm('게시글을 등록하시겠습니까?')) {
                postArticle(article)
                    .then((data) => {
                        console.log('data : ', data.message);
                        setResult(data.message);
                    })
                    .catch((error) => {
                        console.log('error : ', error.response.data.message);
                    })
            }
        }

    }

    const closeModal = () => {
        setResult(null);        
        navigate({pathname: '/list'}, {replace: true})
    }


    const handleClickReset = () => {
        setArticle({
            ...initialState
        })
    }

    return (
        <>        
            <Row className='my-5'>
                <Col className='p-5'>
                    <h3 className='text-center my-5'>게시글 작성</h3>
                    <Form>
                        <h4>제목</h4>
                        <Form.Control placeholder='제목을 입력하세요.' className='my-3' name='title' value={article.title} onChange={handleChange}/>
                        <h4>작성자</h4>
                        <Form.Control placeholder='작성자를 입력하세요.' className='my-3' name='writer'value={article.writer}  onChange={handleChange} />
                        <h4>내용</h4>
                        <Form.Control as='textarea' rows={10} placeholder='내용을 입력하세요.' className='my-3' name='contents' value={article.contents} onChange={handleChange}/>
                        <div className='text-center'>
                            <Button className='mx-2 px-3 btn-sm' onClick={handleClickSave}>저장</Button>
                            <Button className='mx-2 px-3 btn-sm' variant='secondary' onClick={handleClickReset}>초기화</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
            { result != null ? <ResultModal title={'게시글 등록'} content={'게시글이 등록되었습니다.'} callbackFn={closeModal}/> : <></> }
        </>

    )
}

export default ArticleWrite;