const root = document.getElementById("root");
console.dir(root);
const img = root.children[0].children;
console.dir(img);
const button = document.getElementById("button");

let correctAnswer
correctAnswer = [0,2,5]

console.log(correctAnswer)
let clientAnswer = []

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function clicks() {
    let j = clientAnswer.length
    if(img[i].style.backgroundColor === ""){
      img[i].style.backgroundColor = "red";
      clientAnswer[j] = i
      j= j+1
      console.log(clientAnswer)
    }
    else if(img[i].style.backgroundColor === "red"){
      img[i].style.backgroundColor = ""
      if(clientAnswer.indexOf(i) !== -1){
        console.log("뺍니다.")
        clientAnswer = clientAnswer.splice(clientAnswer.indexOf(i),1)
        // pop 말고 배열인덱스로 뺄수 있는 메서드 찾아야함->splice
        console.log(clientAnswer)
        j = j-1
      }
    };

})
}


button.addEventListener("click", () => { 
   
});
