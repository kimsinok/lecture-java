import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import {jsonParser} from '../util/jsonParser.js'


// App 생성
const app = express();

const PORT = 5000;

// Middleware 등록
app.use(cors());
app.use(jsonParser);


// 웹 서버 실행
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})


// DB 연결 설정
const db = mysql.createConnection({
    host: 'localhost',
    user: 'react',
    password: '1234',
    port: '3306',
    database: 'db_board'
});


// DB 연결 테스트
// db.connect((error) => {
//     console.log('error : ', error);
//     if (error) {
//         console.log('DB 연결 실패!!');
      
//     } else {
//         console.log('DB 연결 성공!!')
//     }
// })


// Route 설정
app.get('/list', (req, res) => {  // Route Handler 함수

    const sql =  `SELECT id, title, contents, writer, reg_date 
                  FROM article 
                  ORDER BY id DESC`;

    db.query(sql, (error, data) => {

        if (error) {
            console.log('error : ', error);
            res.status(500).json({message: 'db error'});           
        } else {
            res.status(200).json(data);        
        }

    })

})


// 게시글 등록 요청 
app.post('/write', (req, res) => {

    const writer = req.body.writer;
    const contents = req.body.contents;
    const title = req.body.title;

    const sql = `
        INSERT INTO article (writer, contents, title)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [writer, contents, title], (error, data) => {

        if (error) {
            res.status(500).json({message: 'db error'});
        } else {
            res.status(200).json({message: 'success'});
        }

    });

})


// 게시글 상세 조회 요청 
app.get('/view/:id', (req, res) => {

    const id = req.params.id;

    console.log('id : ', id);

    const sql =  `SELECT id, title, contents, writer, reg_date 
                  FROM article 
                  WHERE id = ?`;

    db.query(sql, [id], (error, data) => {

        if (error) {
            console.log('error : ', error);
            res.status(500).json({message: 'db error'});           
        } else {
            res.status(200).json(data);        
        }

    })



})

