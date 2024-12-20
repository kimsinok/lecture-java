import { Row, Col, Card, Button } from 'react-bootstrap'
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle, removeArticle } from '../api/article';
import ResultModal from './ResultModal';


const ArticleView = () => {

    const { id } = useParams(); // {id: 5}

    const [ article, setArticle] = useState({});

    const [ result, setResult ] = useState(null);

    const navigate = useNavigate();


    useEffect(() => {
        getArticle(id)
            .then((data) => {
                setArticle(data);
            })
            .catch((error) => {
                console.log('error : ', error.resonse.data.message);
            })

    }, [id]);


    const handleClickModiy = () => {
        navigate({pathname: `/modify/${id}`});
    }

    
    const handleClickRemove = () => {
        
        if (confirm('게시글을 삭제하시겠습니까?')) {
            removeArticle(id)
                .then(data => {                    
                    setResult(data.message);
                })
                .catch(error => {
                    console.log('error : ', error);
                })
        }
    }

    const closeModal = () => {
        setResult(null);
        navigate({pathname: `/`});
    }


    return (
        <>
            <div className="board-view">
                <Row className='my-5'>
                    <Col className='px-5'>
                        <h3 className='my-5 text-center'>{id}번 게시글 정보</h3>
                        <div className='text-end my-2'>
                            <Button className='btn-sm mx-2' onClick={handleClickModiy}>수정</Button>&nbsp;&nbsp;
                            <Button className='btn-sm' variant='danger'  onClick={handleClickRemove}>삭제</Button>
                        </div>
                        <Card>
                            <Card.Body>
                                <h5>{article.title}</h5>
                                <hr />
                                <div className='cArea'>{article.contents}</div>
                            </Card.Body>
                            <Card.Footer>
                                Created on {new Date(article.reg_date).toLocaleString()} by {article.writer}
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>
            { result != null ? <ResultModal title={'게시글 삭제'} content={'게시글이 삭제되었습니다'} callbackFn={closeModal}/> : <></> }
        </>
    );
}

export default ArticleView;