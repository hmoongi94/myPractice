// math random()최소값 지정:+
// (math.random()*(최대값-최소값)) + 최소값

console.log((Math.random()*10)+1)

console.log((Math.random()*(10-1))+1)

// JavaScript Math.random() 자릿수 소숫점 삭제
// Math.floor(2.5) -> 2 반환
// 주의할 점 음수일 경우 Math.floor(-2.5) -> -2가 아닌 -3반환

// 1~10까지 정수만 반환
console.log(Math.floor((Math.random()*10)+1))