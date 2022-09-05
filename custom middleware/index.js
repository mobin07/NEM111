const express=require("express")
const app=express();
const fs=require("fs")

const validateRequest=(req,res,next)=>{
    const {id,name,rating,description,genre,cast}=req.query;
    if(typeof(id)=="number" && typeof(name)=="string" && typeof(rating)=="number" && typeof(description)=="string"
    && typeof(genre)=="string" && typeof(cast)=="string"){
        console.log("it will go to next")
        next()
    }else{
        res.status(400).send("bad request")
    }
}
app.use(validateRequest);

app.post("/",(req,res)=>{
    fs.writeFile("./db.json","utf-8",(err,data)=>{
console.log(req)
res.send("hii")
    })
})
app.listen(8000,()=>{
console.log("server got started")
})
