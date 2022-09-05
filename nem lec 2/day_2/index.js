const http=require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{
    console.log(req)
    console.log(req.method)
    


        // if(res.url==="/posts" && req.method==="GET"){
        //     res.end("here are your posts")
        // }else if(res.url==="/posts" && req.method==="POST"){
        //     res.end("we goy the data")
        // }
        
        // else if(res.url==="/comments"){
        //     res.end("here are your posts comments")
        // }else{
        //     res.end("welcome to home")
        // }


    if(res.url==="/posts"){
        try{
            const data=fs.readFileSync("./data.txt",{encoding:"utf-8"})
            res.end(data)
        }catch{
            res.end("sometign went wrong")
        }
    }
    else if(req.url==="/stream"){
        const dataStream=fs.createReadStream("./data.txt","utf-8")
        dataStream.pipe(res)
    }
    
})

server.listen(5000,()=>{
    console.log("listeing on port localhost:5000")
})