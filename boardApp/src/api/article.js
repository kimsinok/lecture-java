
// article.js

import axios from "axios";


const API_SERVER_HOST = 'http://localhost:5000';


// 게시글 목록 조회 API 요청
export const getArticleList = async () => {

    const response = await axios.get(`${API_SERVER_HOST}/list`);

    console.log('response : ', response);
    console.log('response : ', response.data);

    return response.data;

}
