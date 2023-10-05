const http = require("http");

function callBackBody(body1, body2){
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>${body1}</h1>
  <h2>${body2}</h2>
</body>
</html>`
}

function htmlBody(body1,body2,callback){
  return callback(body1,body2)
}

// let makeHtmlBody = callBackBody("안녕하세요2","잘가세요",htmlBody)
// console.log(makeHtmlBody)

const server = http.createServer(function(request,response){
  if(request.url === "/"){
  response.writeHead(200,{"Content-Type":"text/html"})
  let first = htmlBody("안녕하세요1","잘가세요",callBackBody)
  response.end(first)
  }
  if(request.url === "/second"){
  response.writeHead(200,{"Content-Type":"text/html"})
  let second = htmlBody("안녕하세요2","잘가세요",callBackBody)
  response.end(second)
  }
  if(request.url ==="/third"){
  response.writeHead(200,{"Content-Type":"text/html"})
  let third = htmlBody("안녕하세요3","잘가세요",callBackBody)
  response.end(third)
  }
  
})






server.listen(8000)