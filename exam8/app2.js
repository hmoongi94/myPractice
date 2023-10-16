const fs = require("fs")
const path = require("path")

let arr = [];
fs.readdir("./static/jpgimage",function(err, filelist){
  if(err){
    console.log("err")
  }
  pathparse = "";
  for(let i=0; i<filelist.length; i++){
    arr[i]= filelist[i];
    let pathparse = path.basename(arr[i], ".jpg")
    console.log(pathparse)


  }
})