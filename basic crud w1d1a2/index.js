const fs=require("fs")
let command=process.argv[2]
let name=process.argv[3]
let name1=process.argv[4]
console.log(command)

if(command=="create"){
fs.writeFileSync("test.txt","hi")
}

if(command=="read"){
   buf_data= fs.readFileSync("test.txt","utf8")
   console.log(buf_data)
//    let org_data=buf_data.toString();
//    console.log(org_data)
}

if(command=="append"){
    fs.appendFileSync("text.txt", "how are you")
}

if(command=="rename"){
    fs.renameSync(`${name}`,`${name1}`)
}

if(command=="delete"){
    fs.unlinkSync("new.txt")
}