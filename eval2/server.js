const express=require("express");
const fs=require("fs");
const postsRoutes=require("./routes/posts.routes")
const app=express();
app.use(express.json())


const logger=(req,res,next)=>{
    console.log(req.url)
    console.log(req.method)

    let x=req.method+" "+req.url+"\n"
    fs.appendFileSync("logs.txt",x)
    
    next()
}
app.use(logger)
app.use("/posts/create",postsRoutes)


app.get("/posts",(req,res)=>{
    const result=fs.readFileSync("./posts.json","utf-8")
    console.log(result)
res.send(result)
})
const validator=(req,res,next)=>{
    
}

app.post("/posts/create",(req,res)=>{
    const log=req.body;
    const prev_data=fs.readFileSync("./posts.json","utf-8")
    let parsed_prev_data=JSON.parse(prev_data);
    console.log(parsed_prev_data)
    let posts=parsed_prev_data.posts;
    posts.push(log);
    console.log(parsed_prev_data)
    const latest_data=JSON.stringify(parsed_prev_data);
    fs.writeFileSync("./posts.json",latest_data,"utf-8");
    res.send("data added")
})
// const guard=(req,res,next)=>{
// req.query
// }
// app.use(guard)
app.put("/posts/:postId ",(req,res)=>{
    const id=req.params.postId ;
    // console.log(req.params.postId)
    let log=req.body;
    let prev_data=fs.readFileSync("./posts.json","utf-8")
    let parsed_prev_data=JSON.parse(prev_data);
    console.log(parsed_prev_data);
    let posts=parsed_prev_data.posts;
    let latest_data=posts.map((ele)=>{
        if(ele.id!=log.id){
            return ele
        }else{
            return {...ele,...log}
        }
    })
    parsed_prev_data.products=latest_data;

    fs.writeFileSync("./db.json",JSON.stringify(parsed_prev_data),"utf-8");
    console.log(parsed_prev_data);
    res.send("data updated")
})
app.delete("/posts/:postId",(req,res)=>{
    const id=req.params.postId ;
    console.log(id)
    let prev_data=fs.readFileSync("./posts.json","utf-8");
    let parsed_prev_data=JSON.parse(prev_data)
    let products=parsed_prev_data.posts;
    let latest_data=products.filter((ele)=>{
        if(ele.id!=id){
            return ele
        }
    })
    parsed_prev_data.products=latest_data
    fs.writeFileSync("./posts.json",JSON.stringify(parsed_prev_data),"utf-8");
    console.log(parsed_prev_data);
    res.send("data got delted")
})



app.listen(8000,()=>{
    console.log("server got started ar port 8000")
})