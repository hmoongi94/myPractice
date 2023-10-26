const express = require('express');
const app = express();
const port = 3000;

// JSON 데이터를 파싱하기 위해 express.json() 미들웨어 사용
app.use(express.json());

app.post('/sub.html', (req, res) => {
  const receivedData = req.body.data; // 클라이언트가 보낸 데이터

  // 여기서 receivedData를 사용하여 필요한 작업 수행

  // 클라이언트에 응답 보내기
  res.json({ message: '데이터가 성공적으로 처리되었습니다.' });
});

app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});