// math random()최소값 지정:+
// (math.random()*(최대값-최소값)) + 최소값

console.log((Math.random()*10)+1)

console.log((Math.random()*(10-1))+1)

// JavaScript Math.random() 자릿수 소숫점 삭제
// Math.floor(2.5) -> 2 반환
// 주의할 점 음수일 경우 Math.floor(-2.5) -> -2가 아닌 -3반환

// 1~10까지 정수만 반환
console.log(Math.floor((Math.random()*10)+1))

// tostring 사용해보기 (mdn)
function Dog(name){
  this.name = name;
}
const dog1 = new Dog('Gabby');

Dog.prototype.toString = function dogtostring(){
  return `${this.name}`;
}

console.log(dog1.toString())
// output: Gabby

// mdn 이해x
var num = 24;
var str = num.toString();

console.log(num) //24
console.log(str) //"24"


// //랜덤한수 예시
// dotCreate.addEventListener('click', function (event) {
//   let x = Math.floor(Math.random() * event.pageX + 245);
//   let y = Math.floor(Math.random() * event.pageY + 117);
//   let xString = x.toString();
//   let ySting = y.toString();
//   dotCreate.style.left = xString + 'px';
//   dotCreate.style.top = ySting + 'px';
// });