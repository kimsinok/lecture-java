
// jsonParser.js

export const jsonParser = (req, res, next) => {

    let data = '';

    // 클라이언트 요청이 수신되었을때
    req.on('data', (chunk) => {     
        data += chunk;
    });

    // 클라이언트 요청 수신이 완료되었을때
    req.on('end', () => {
        try {           
            req.body = JSON.parse(data);          
            
        } catch(error) {           
            req.body = {};
        }
        next();   // 미들웨어, Route 호출
    });

}
