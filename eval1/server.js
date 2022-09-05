const express=require("express");
const fs=require("fs");
const address=require("address")
const app=express();
app.use(express.json())

app.get("/products",(req,res)=>{
    const result=fs.readFileSync("./db.json","utf-8")
    console.log(result)
res.send(result)

})
app.post("/products/create",(req,res)=>{
    const log=req.body;
    const prev_data=fs.readFileSync("./db.json","utf-8")
    let parsed_prev_data=JSON.parse(prev_data);
    console.log(parsed_prev_data)
    let products=parsed_prev_data.products;
    products.push(log);
    console.log(parsed_prev_data)
    const latest_data=JSON.stringify(parsed_prev_data);
    fs.writeFileSync("./db.json",latest_data,"utf-8");
    res.send("product added")
})
app.put("/products/:productid",(req,res)=>{
    let log=req.body;
    let prev_data=fs.readFileSync("./db.json","utf-8")
    let parsed_prev_data=JSON.parse(prev_data);
    console.log(parsed_prev_data);
    let products=parsed_prev_data.products;
    let latest_data=products.map((ele)=>{
        if(ele.id!=log.id){
            return ele
        }else{
            return {...ele,...log}
        }
    })
    parsed_prev_data.products=latest_data;

    fs.writeFileSync("./db.json",JSON.stringify(parsed_prev_data),"utf-8");
    console.log(parsed_prev_data);
    res.send("data got updated")
})

app.delete("/products/:productid",(req,res)=>{
    let {id}=req.body;
    let prev_data=fs.readFileSync("./db.json","utf-8");
    let parsed_prev_data=JSON.parse(prev_data)
    let products=parsed_prev_data.products;
    let latest_data=products.filter((ele)=>{
        if(ele.id!=id){
            return ele
        }
    })
    parsed_prev_data.products=latest_data
    fs.writeFileSync("./db.json",JSON.stringify(parsed_prev_data),"utf-8");
    console.log(parsed_prev_data);
    res.send("data got delted")
})

app.post("/getmeip",(req,res)=>{
    address((err,add)=>{
        res.send(add.ip)
    })
})

app.listen(7000,()=>{
    console.log("server got started ar port 7000")
})