const express = require('express');
const mariadb = require('mariadb');
const bodyParser = require('body-parser');
const { appendFileSync } = require('fs');

const app = express();
const port = 3000;

// MariaDB 연결 설정
// * createPool은 마리아DB의 데이터베이스이름을 적어서 데이터베이스와의 연결점을 만듬
// * pool.getconnection()을 사용해서 데이터베이스에 접속한 뒤
// * query()를 사용해서 테이블을 지정해주고 넣어야 데이터값을 지정해줌.
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mariadb',
  database: 'practice',
  connectionLimit: 5,
});

// Body parser 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./public'))

// 회원가입 API
app.post('/signup', async (req, res) => {
  console.log(req.body)
  //* 구조분해 시 주의할점) req.body라는 객체에서 {}의 속성값과 일치해야함.
  const { username, password } = req.body;

  try {
    const conn = await pool.getConnection();
    const result = await conn.query(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, password]
    );

    conn.release();

    res.status(200).json({ success: true, message: '회원가입 성공' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: '서버 오류' });
  }
});

// 로그인 API
app.post('/login', async (req, res) => {
  console.log(req.body)
  const { username, password } = req.body;

  try {
    const conn = await pool.getConnection();
    const result = await conn.query(
      'SELECT * FROM users WHERE username = ? AND password = ?',
      [username, password]
    );

    conn.release();

    if (result.length > 0) {
      res.status(200).json({ success: true, message: '로그인 성공' });
    } else {
      res.status(401).json({ success: false, message: '아이디 또는 비밀번호가 올바르지 않습니다.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: '서버 오류' });
  }
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});