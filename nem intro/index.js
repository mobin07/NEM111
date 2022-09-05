// const sum=require("./test")
// sum(2,3)

// const mul=require("./test")
// mul(2,3)

// const os = require('os');
// console.log(os.cpus())


const fs=require("fs")

fs.readFile("./test.txt",{encoding:"etf-8"},(x,y)=>{
    if(x){
        console.log(x)
    }
    console.log(y)
})

console.log("last line")

