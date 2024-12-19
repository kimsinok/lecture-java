import { Table }  from 'react-bootstrap'
import { getArticleList } from '../api/article';
import { useEffect, useState } from 'react';


const ArticeList = () => {

    const [ articles, setArticles ] = useState([]);
    

    // 컴포넌트가 마운트될때
    useEffect(() =>{

        getArticleList()
            .then((data) => {
                console.log('data : ', data);
                setArticles(data);
            })
            .catch((error) => {
                //console.log('error : ', error);  // {message: 'db error'}
                console.log('error : ', error.response.data.message);

            }) 

    }, [])



	
    return (
        <div className='board-list'>
            <h3>게시글 목록</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>                       
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                {
                    articles.map((article, index) => {
                        return (<tr key={article.id}>
                            <td>{article.title}</td>
                            <td>{article.writer}</td>
                            <td>{new Date(article.reg_date).toLocaleString()}</td>
                        </tr>);

                    })
                }  
                </tbody>
            </Table>
        </div>
    )
}


export default ArticeList;