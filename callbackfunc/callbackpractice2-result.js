function startfunction(path, callback){
  const data = path
  callback(data)
}

function callbackfunction(callback,data){
  callback()
}

function working(){
  console.log("마지막까지 작동")
}

startfunction("안녕",function(){
  callbackfunction
})