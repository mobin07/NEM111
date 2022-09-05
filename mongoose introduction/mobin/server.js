const express=require("express");
const {connection,movieModel}=require("./index.js");
const app=express();
app.use(express.json());



app.get("/", async (req,res)=>{
    const result=await movieModel.find({},{_id:0,__v:0})
    res.send(result)
})

app.get("/filter",async(req,res)=>{
const result=await movieModel.find().sort({rating:1}).sort({title:1})
res.send(result);
})

app.post("/post", async (req,res)=>{
    console.log(req.body);
    const result=await movieModel.insertMany([req.body]);
     res.send("posted");
})

app.patch("/update/:id", async (req,res)=>{
const {id}=req.params;
console.log(id);
const data=await movieModel.updateOne({id:id},req.body)
res.send("update");
})

app.delete("/delete/:id",async (req,res)=>{
    const {id}=req.params;
  await movieModel.deleteOne({id:id});
  res.send("deleted");
})


app.get("/all", async (req,res)=>{
   const {text}=req.query;
//    const a= await movieModel.createIndex({ title: "text" });
const data=await movieModel.find({"title":{$regex:/^dho/i}})
 res.send(data)
})





app.listen(8000, async ()=>{
    try{
        await connection;
    }
    catch(err){
        console.log("not connected");
    }
    console.log("server is running on 8080");
})