const express=require("express")
const fs=require("fs");
const app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    const result=fs.readFileSync("./db.json","utf-8")
    // const parsed_result=JSON.parse(result)
    // console.log(parsed_result)
    res.send(result)


})

app.post("/",(req,res)=>{
    const data=req.body;
    const prev_data=fs.readFileSync("db.json","utf-8")
    const parsed_data=JSON.parse(prev_data)
    const course_arr=parsed_data.course;
    course_arr.push(data);
    const latest_data=JSON.stringify(parsed_data);
    fs.writeFileSync("db.json",latest_data,"utf-8")
    res.send("course data added")

})
app.patch('/',(req,res)=>{
    const {id,name}=req.body;
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){
            return res.send("something went wrong")
        }
        const prev_data=JSON.parse(data);
        const new_data=prev_data.course.map((ele,index)=>{
            if(ele.id===id){
                return {...ele,student_name:name}
            }else{
                return ele
            }
        })
        prev_data.course=new_data;
        fs.writeFileSync("db.json",JSON.stringify(prev_data),"utf-8")
        res.send("data got updated")
    })

})

app.delete("/",(req,res)=>{
    const {id}=req.body;
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){
            return res.send("something went wrong")
        }
        const prev_data=JSON.parse(data);
        const new_data=prev_data.course.filter((ele)=>{
            if(ele.id!==id){
                return ele
            }
        })
        prev_data.course=new_data;
        fs.writeFileSync('db.json',JSON.stringify(prev_data),"utf-8")
        res.send("data got deleted")
    })
})
app.listen(5000,()=>{
    console.log("server got started at port 5000")
})