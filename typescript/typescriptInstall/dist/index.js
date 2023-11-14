"use strict";
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
let c = {
    firstName: 'john',
    lastName: 'barrowman'
};
class Person {
    constructor(firstName, //public은 this.firstName = firstName을 단축한 것
    lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
console.log(c);
c = new Person('matt', 'smith');
console.log(c);
//# sourceMappingURL=index.js.map