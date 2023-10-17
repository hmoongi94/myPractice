const arr1 = [1,2,3,4,5,6]
const arr2 = [1,2,3,4]
const arr3 = [1,2,3,4]

// json.stringfy
const equals = (a,b) =>{
  console.log(JSON.stringify(a) === JSON.stringify(b)) 
}

equals(arr3,arr2)