const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static('public'));

let savedData = null;

app.post('/send-data', (req, res) => {
    savedData = req.body.data;
    res.json({ message: '데이터가 서버로 전송되었습니다.' });
});

app.get('/get-data', (req, res) => {
    res.json({ data: savedData });
});

app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});