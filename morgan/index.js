const express=require("express")
const app=express()

const morgan=require("morgan")
app.use(express.json())

app.use(morgan(`:url :method :res[content-length] :http-version  [:date[clf]]  :remote-user :response-time ms `))
app.get("/",(req,res)=>{
    console.log("hi")
    res.send("hello")
})

app.listen(9000,()=>{
    console.log("listening at 9000")
})