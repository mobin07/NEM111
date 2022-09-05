const http=require("http")

const server=http.createServer((req,res)=>{
    console.log(req)
    console.log(req.method)
    


        if(res.url==="/posts" && req.method==="GET"){
            res.end("here are your posts")
        }else if(res.url==="/posts" && req.method==="POST"){
            res.end("we goy the data")
        }
        
        else if(res.url==="/comments"){
            res.end("here are your posts comments")
        }else{
            res.end("welcome to home")
        }
    
    
})

server.listen(5000,()=>{
    console.log("listeing on port localhost:5000")
})