// * typescript 맛보기
// let a = 1+2
// let b = a+3
// let c ={
//   apple: a,
//   banana: b
// }
// let d = c.apple*4
// console.log(d)

// * any
// function squareof(n:number){
//   console.log(n*n)
// }

// squareof(2)
// squareof('z')

// let a: any =666
// let b: any =['danger']
// let c = a+b
// console.log(c)

// * unknown
// let a: unknown = 30
// let b = a === 123
// let c = a +10
// if(typeof a === 'number'){
//   let d = a + 10
// }
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

//* bigint
// let a = 1234n
// const b = 5678n
// var c = a + b

//* object
// let a:object = {
//   b: 'x'
// }

// a.b // 에러: 'b'프로퍼티는 'object'에 존재하지 않음

// let a = {
//   b: 'x'
// }
// a.b

// let b = {
//   c:{
//     d: 'f'
//   }
// }

  //* object에서 let과 const의 차이 다른 데이터타입과 달리 const를 사용했을 경우 밑에 예시를 본결과 b가 12로 좁혀지지 않고 더 넓은 단위인 number가 나옴.
// let a: {b:number} = {
//   b:12
// }  //{b:number}

// const a: {b: number} = {
//   b:12
// } // 여전히 {b:number}

  //* 객체의 형태를 묘사하며 객체 리터럴과 클래스 인스턴스 모두 이 형태를 만족하므로 타입스크립트는 person을 c로 할당하는 동작을 허용한다.
// let c: {
//   firstName: string
//   lastName: string
// } = {
//   firstName: 'john',
//   lastName: 'barrowman'
// }

// class Person {
//   constructor(
//     public firstName: string, //public은 this.firstName = firstName을 단축한 것
//     public lastName:string
//   ){}
// }

// console.log(c)
// c = new Person('matt','smith')
// console.log(c)

// let a: {b:number}
// a={} //{b:number} 타입에 필요한 b프로퍼티가 없음

// a={
//   b:1,
//   c:2 //에러 {b:number; c: number} 타입을 {b:number}타입에 할당할 수 없음
//       //객체 리터럴은 알려진 프로퍼티만 지정할 수 있는데
//       //c는 {b:number} 타입에 존재하지 않음
// }

  //* 타입스크립트는 객체 프로퍼티에 엄격한 편이다. 예를 들어 객체에 number타입의 b라는 프로퍼티가 있어야 한다고 정의하면 타입스크립트는 오직 b만 기대한다. b가 없거나 다른 추가 프로퍼티가 있으면 에러를 발생시킨다.
  //? 그럼 어떤 프로퍼티는 선택형이고 예정에 없던 프로퍼티가 추가될 수 있다고 타입스크립트에 알려줄 수 있을까?
  //* 인덱스 시그니처(index signature)
  //* [key: T]: U같은 문법을 인덱스 시그니처라 부르며 타입스크립트에 어떤 객체가 여러 키를 가질 수 있음을 알려준다.
  //* 주의점: 인덱스 시그니처의 키(T)는 반드시 number나 string타입에 할당할 수 있는 타입이어야한다.
  //* 인덱스 시그니처의 키 이름은 원하는 이름을 가져다 바꿔도 된다. 즉 key가 아니어도 된다.

  // ex)
  // let airplaneSeatingAssignments:{
  //   [seatNumber: string] : string
  // } = {
  //   '34D': 'Boris Cherny',
  //   '34E' : 'Bill Gates'
  // }

  //* 선택형(인덱스 시그니처) 외에 readonly 한정자를 이용해 특정 필드를 읽기 전용으로 정의할 수 있다.
  //* const를 적용한듯이 읽기전용이라 바꿀 수 없다.
  // let user:{
  //   readonly firstname: string
  // } = {
  //   firstname: 'abby'
  // }
  // user.firstname
  // user.firstname = 'abbey with an e' //읽기 전용 프로퍼티이므로 할당할 수 없음

  //* 객체 리터럴 표기법에는 빈 객체 타입({})이라는 특별한 상황이 존재한다. null과 undefined를 제외한 모든 타입은 빈 객체 타입에 할당할 수 있으나, 이는 사용하기 까다롭게 만든다. 따라서 빈 객체는 피하는 것이 좋다.
  // let danger:{}
  // danger = {}
  // danger = {x:1}
  // danger = [] 
  // danger = 2
  
  //* 요약
  // 1. 객체 리터럴 또는 형태라 불리는 표기법({a:string}). 객체가 어떤 필드를 포함할 수 있는지 알고 있거나 객체의 모든 값이 같은 타입을 가질 때 사용한다.
  // 2. 빈 객체 리터럴 표기법({}). 사용을 지양해라.
  // 3. object타입. 어떤 필드를 가지고 있는지는 관심없고, 그저 객체가 필요할 때 사용한다.
  // 4. object타입. 사용을 지양해라.

//* 타입 별칭
  //* (let, const, var) 변수를 선언해서 값 대신 변수로 칭하듯이 타입 별칭으로 타입을 가리킬 수 있다.
  // type Age = number
  // type Person = {
  //   name: string
  //   age: Age
  // }

  // let age: Age = 55
  // let driver: Person = {
  //   name: "james May",
  //   age: age
  // }

  //* 타입별칭은 변수선언과 마찬가지로 하나의 타입을 2번 정의할 수는 없다.
  // type Color = 'red'
  // type Color = 'blue'

  //* 모든 블록과 함수는 자신만의 영역을 가지므로 내부에 정의한 타입 별칭이 외부의 정의를 덮어쓴다.(shadowing)
  // type Color = 'red'

  // let x = Math.random() < .5
  // if(x){
  //   type Color = 'blue' //위의 color 정의를 덮어씀
  //   let b: Color = 'blue'
  // } else{
  //   let c: Color = 'red'
  // }

  //* 유니온과 인터섹션 타입
  //* 유니온: 합집합, 인터섹션: 교집합
  // type Returns = string | null

  // function(a:string, b: number){
  //   return a||b
  // }

//* 배열
  // *자바스크립트처럼 타입스크립트 배열도 연결, 푸시, 검색, 슬라이스 등을 지원하는 특별한 객체다.
  //* T[] 문법으로 배열의 타입을 정의.
  // let a = [1,2,3]
  // var b = ['a','b']
  // let c:string[] = ['a']
  // let d = [1, 'a']
  // const e = [2,'b']

  // let f = ['red']
  // f.push('blue')
  // f.push(true) //에러 'ture'는 불리언이기 때문에 string타입에 넣을 수 없음
  
  // let g = [] 
  // g.push(1)
  // g.push('red') 

  // let h: number[] = []
  // h.push(1)
  // h.push('red') //에러 'red'타입 인수를 'number'타입 매개변수에 할당 할 수 없음

  // d = []
  // d = [1,'a',true] // 에러 초기화를 해도 string| number를 가진 상태임

  // let d = [1,'a']
  // const dMap = d.map(_=> {
  //   if(typeof _ === 'number'){
  //     return _ * 3 
  //   }
  //   return _.toUpperCase()
  // })

  // console.log(dMap)

  //* 배열이 정의된 영역을 벗어나면 타입스크립트는 배열을 더 이상 확장할 수 없도록 최종타입을 할당한다.
  // function buildArray(){
  //   let a = []
  //   a.push(1)
  //   a.push('x')
  //   return a
  // }

  // let myArray = buildArray() // (string | number)
  // myArray.push(true) //에러 true타입의 인수는 string | number 타입의 매개변수에 할당 할 수 없음.

  // * 연습문제
  //? 타입스크립트는 다음의 값을 어떻게 추론할까?
  // let a = 1042
  // let b = 'apples and pine'
  // const c = 'pineapples'
  // let d = [true, true, false]
  // let e = {type: 'ficus'}
  // let f = [1, false]
  // const g = [3]
  // let h = null