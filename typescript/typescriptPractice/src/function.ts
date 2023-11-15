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

  //* 나머지 매개변수
  // function sum(numbers: number[]): number{
  //   return numbers.reduce((total,n)=> total + n, 0)
  // }
  // sum([1,2,3])

  // function sumVariadic():number{
  //   return Array.from(arguments)
  //   .reduce((total,n)=> total +n, 0)
  // }

  // sumVariadic(1,2,3) //* 위에 코드는 문제가 있음 reduce의 매개변수 total,n이 number타입이아닌 any타입이기 때문에 실제 사용하기전까지 문제를 드러내지 않는다.

  //* 그러기 때문에 나머지매개변수 ...을 사용해서 타입을 정해준다. 매개변수가 0개이상이면 모두 만족한다.
  //* 자바스크립트에서 스프레드 연산자 ...과는 다른 기능이기 때문에 헷갈리지말자.
  function sumVariadicSafe(...numbers: number[]):number{
    return numbers.reduce((total,n)=> total + n, 0)
  }

  sumVariadicSafe(1,5,3)