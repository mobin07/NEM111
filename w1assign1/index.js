const {sum,sub,mul,div}=require("./calc.js")



// console.log(process.argv[2])

let x=process.argv[2];
let a=process.argv[3];
let b=process.argv[4];

if(x=="sum"){
   let ans= sum(a,b);
   console.log(ans)
}
if(x=="sub"){
    let ans= sub(a,b);
    console.log(ans)
 }
 if(x=="mul"){
    let ans= mul(a,b);
    console.log(ans)
 }
 if(x=="div"){
    let ans= div(a,b);
    console.log(ans)
 }

 if(x=="random"){
    var crypto = require('crypto'),
    format = require('biguint-format');

function randomC (qty) {
    var x= crypto.randomBytes(qty);
    return format(x, 'dec');
}
function random (low, high) {
    return randomC(4)/Math.pow(2,4*8-1) * (high - low) + low;
}
console.log(random(50,1000));
 }