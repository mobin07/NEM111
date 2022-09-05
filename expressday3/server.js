const express=require("express")
const fs=require("fs")
const app=express()
app.use(express.json())
// method+route
app.get("/",(req,res)=>{
    res.send("Home page")
})

// app.get("/posts",(req,res)=>{
//     const posts=fs.readFileSync("posts.txt",{encoding:"utf-8"})
//    console.log(req.body)
//     res.send(posts)
// })
// app.get("/posts",(req,res)=>{

//     const result=fs.readFileSync("./database.txt",{encoding:"utf-8"})
  
//     res.send(result)
// })
app.get("/attendence_data",(req,res)=>{
// read the data from db.json and store it in some varibale
const result=fs.readFileSync("./db.json","utf-8")
// perform some operation u want if requird
const parsed_result=JSON.parse(result)
const attendence=parsed_result.attendence
console.log(attendence)
// send the response

})


app.post ("/mark_attendence",(req,res)=>{
    // get the data from the client
    const log=req.body;
    // store in db.json
    // 1.get attendence data
    const prev_data=fs.readFileSync("db.json","utf-8")
    console.log("prev data- "+prev_data)
    const parsed_prev_data=JSON.parse(prev_data)
    // console.log("parsed_prev_data- "+parsed_prev_data)
    const attendence=parsed_prev_data.attendence
    // 2. add dthe received data to it
    // console.log("attendence array- "+attendence)
    attendence.push(log)
    const latest_data=JSON.stringify(parsed_prev_data)
    // 3.finally store that in db.json
    fs.writeFileSync("./db.json",latest_data,"utf-8")

    res.send("attendence added")
})

app.post("/posts",(req,res)=>{
    const data_received=JSON.stringify(req.body);
    fs.writeFileSync("./database.txt",data_received,{encoding:"utf-8"})
    res.send("we got out data")
})



app.patch("/modify",(req,res)=>{
    const {id,new_time}=req.body;
fs.readFile("./db.json","utf-8",(err,data)=>{
    if(err){
        return res.send("something went wrong, please try again later")

    }
    const prev_data=JSON.parse(data);
    const new_att=prev_data.attendence.map((ele)=>{
        if(ele.id===id){
            return {...ele,modified_time:new_time}
        }else{
            return ele;
        }
    })
    prev_data.attendence=new_att;
fs.writeFileSync("db.json",JSON.stringify(prev_data),"utf-8")


    // console.log(prev_data);
    res.send('data got updated')
})
})

app.listen(5000,()=>{
    console.log("servver started in port 5000")
})