//  먼저, 합계를 저장할 변수를 선언합니다.
// 다음으로, 내가 뽑아낸 숫자값들을 배열에 저장합니다.
// 마지막으로, 배열의 요소들을 반복하면서 합계를 구합니다.

// 합계를 저장할 변수 선언
let sum = 0;

// 내가 뽑아낸 숫자값들을 배열에 저장
const numbers = [1, 2, 3, 4, 5];

// 배열의 요소들을 반복하면서 합계를 구함
for (const number of numbers) {
  sum += number;
}

// 합계를 출력함
console.log(sum); // 15

// forEach() 메소드를 사용하여 합계를 구함
numbers.forEach((number) => {
  sum += number;
});

console.log(sum); // 15

// reduce() 메소드를 사용하여 합계를 구함
sum = numbers.reduce((a, b) => a + b, 0);

console.log(sum); // 15