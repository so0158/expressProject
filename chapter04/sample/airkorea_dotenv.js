const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path: path.resolve(__dirname, "../../.env")});
const morgan = require('morgan');  
const axios = require('axios');
const express = require('express');
const app = express();

/* 포트 설정 */
app.set('port', process.env.PORT|| '8080');

/* 공통 미들웨어 */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended :  true}));

/* 라우팅 설정 */
app.get('/air', async (req, res) => {
    const serviceKey = process.env.airServiceKey;
    const airUrl = "http://apis.data.go.kr/1360000/RoadWthrInfoService?";
    let params = encodeURI('serviceKey') + '=' + serviceKey;
    params += '&' + encodeURI('pageNo') + '=' + encodeURI('1');
    params += '&' + encodeURI('numOfRows') + '=' + encodeURI('10');
    params += '&' + encodeURI('dataType') + '=' + encodeURI('JSON');
    params += '&' + encodeURI('eqmtId') + '=' + encodeURI('0500C00001');
    params += '&' + encodeURI('eqmtId') + '=' + encodeURI('00');

    const url = airUrl+params;
    try{
        const result = await axios.get(url);
       console.log(result);    
        res.json(result.data);
    }catch(error){
        console.log(error);
    }    
});
/* 서버와 포트 연결 */
app.listen(app.get('port'), () =>{
    console.log(app.get('port'), '번 포트에서 서버 실행!!')
});
