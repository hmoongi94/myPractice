const http = require('http')
const port = process.env.PORT || 3000
const contentType = {"Content-Type": "text/plain"}

const server =http.createServer((req,res)=>{
  // 쿼리스트링, 옵션인 마지막 슬래시를 없애고 소문자로 바꿔서 url을 정규화합니다.
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
  switch(path){
    case '':
      res.writeHead(200,contentType)
      res.end('Homepage')
      break
    case '/about':
      res.writeHead(200,contentType)
      res.end('About')
      break
    default:
      res.writeHead(404,contentType)
      res.end('not found')
      break

  }
})

server.listen(port, ()=> console.log(`server started on port ${port}`+`press Ctrl-c to terminate...`)
)