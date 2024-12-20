import { Row, Col, Card, Button } from 'react-bootstrap'
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle } from '../api/article';


const ArticleView = () => {

    const { id } = useParams(); // {id: 5}

    const [ article, setArticle] = useState({});

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


    return (
        <div className="board-view">
            <Row className='my-5'>
                <Col className='px-5'>
                    <h3 className='my-5 text-center'>{id}번 게시글 정보</h3>
                    <div className='text-end my-2'>
                        <Button className='btn-sm mx-2' onClick={handleClickModiy}>수정</Button>&nbsp;&nbsp;
                        <Button className='btn-sm' variant='danger'>삭제</Button>
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
    );
}


export default ArticleView;