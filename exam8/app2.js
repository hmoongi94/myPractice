const fs = require("fs");
const { request } = require("http");
const path = require("path")

let arrjpg = [];
fs.readdir("./static/jpgimage",function(err, filelist){
  if(err){
    console.log("err")
  }
  pathparse = "";
  for(let i=0; i<filelist.length; i++){
    arrjpg[i]= filelist[i];
    let pathparse = path.basename(arrjpg[i], ".jpg")
    console.log(pathparse)
  }
  if(request.url === `/${pathparse}`){
    console.log(request.url);
    fs.readFile(``)
  }

})