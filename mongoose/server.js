// const express=require("express")
// const app=express()
// const {connection,StudentModel}=require("./index")
// app.use(express.json())
// app.get("/",(req,res)=>{
//     res.send("home page")
// })
// app.get("/students",async(req,res)=>{
//     console.log(req.query)
//     const {name,age}=req.query
//    const results= await StudentModel.find({$or:[{name},{age}]},{_id:0,_v:0})
//    res.send(results)
// })

// app.post("/students/create",async(req,res)=>{
//     // const studentData=new StudentModel(req.body);
//     const student=await StudentModel.insertMany([req.body])
//     // await studentData.save()
//     res.send("student saved")
// })

// app.listen(8080,async()=>{
//     // connect to db here
// try{
//     await connection
//     console.log("connected to db successfully")
// }catch{
//     console.log("error connecting to db")
// }
//     console.log("listening to server 8080")
// })

// mongodb+srv://mobinmemon:<password>@cluster0.4yiuhie.mongodb.net/?retryWrites=true&w=majority


// faisal
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