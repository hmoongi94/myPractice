const http = require('http')
const port = process.env.PORT || 3000
const contentType = {"Content-Type": "text/plain"}

const server =http.createServer((req,res)=>{
  res.writeHead(200, contentType)
  res.end('hello World!')
})

server.listen(port, ()=> console.log(`server started on port ${port}`+`press Ctrl-c to terminate...`)
)