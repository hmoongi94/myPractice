//* 선택적 매개변수와 기본 매개변수
  //* 선택적 매개변수 ?사용 -> userId?
  //   function log(message: string, userId?: string){
  //   let time = new Date().toLocaleTimeString()
  //   console.log(time, message, userId || 'not signed in')
  // }

  // log('Page loaded')
  // log('User signed in', 'da763be')

  //* 기본 매개변수
  // type Context = {
  //   appId?: string
  //   userId?: string
  // }

  // function log(message:string, context: Context={}){
  //   let time = new Date().toISOString()
  //   console.log(time, message, context.userId)
  // }
  // log('dd',{appId:'dd'})