const http = require("http");

function htmlBody(body1, body2){
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

function callBackBody(body1,body2,callback){
  return callback(body1,body2)
}

let makeHtmlBody = callBackBody("안녕하세요","잘가세요",htmlBody)
console.log(makeHtmlBody)

// const server = http.createServer(function(request,response){
//   response.writeHead(200,{"Content-Type":"text/html"})
//   response.end()
// })