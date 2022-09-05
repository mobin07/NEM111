const express=require("express");
const {connection,studentModel}=require("./index")
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.get("/students",async (req,res)=>{
    
const result=await studentModel.find({},{id:0,_v:0});
    res.send(result);
})

app.post("/students/create",async (req,res)=>{
    const studentData= await studentModel.insertMany([req.body])
    res.send("student Saved");
})



app.listen(8080,async ()=>{
    try{
        await connection;
    }catch(err){
        console.log(err);
    }
    console.log("sever 8000");
})