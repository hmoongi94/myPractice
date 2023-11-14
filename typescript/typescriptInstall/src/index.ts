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

  let airplaneSeatingAssignments:{
    [seatNumber: string] : string
  } = {
    '34D': 'Boris Cherny',
    '34E' : 'Bill Gates'
  }