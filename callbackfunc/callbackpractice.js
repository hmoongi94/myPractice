function callbacktest(text, callback){
  console.log(text)
  callback()
  }

function callbackinfunction(text2, callback2){
  console.log(text2)
  callback2()
}

function work(){
  console.log('잘 작동함')
}

callbacktest("처음 시작하는 함수",function(){
  callbackinfunction("2번째 작동하는 함수",function(){
    work()
  })
})