//중복을 제외하고 7회 돌면서 랜덤 숫자 뽑기
let randomIndexArray = []
for (i=0; i<7; i++) {
  randomNum = Math.floor(Math.random() * 24)
  if (randomIndexArray.indexOf(randomNum) === -1) {
    randomIndexArray.push(randomNum)
  }
}
console.log(randomIndexArray)
// [12, 2, 6, 23, 8, 15]