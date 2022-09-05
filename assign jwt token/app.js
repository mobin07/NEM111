const express=require("express")
const connection=require("./config")
const UserModel=require("./models/User.model")
var jwt = require('jsonwebtoken');
const authentication=require("./middlewares/authentication");
const productController = require("./routes/product.routes");
const app=express()
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Homepage")
})
app.post("/register",(req,res)=>{
let {email,password,age}=req.body;
const user=UserModel({email,password,save});
user.save();
res.send("sign up successfull")
})

app.post("/login",async(req,res)=>{
    let {email,password}=req.body;
    const user=await UserModel.findOne({email,password})
    if(!user){
        res.send("Invalid Crediantials")
    }
    var token = jwt.sign({ "email":user.email,"password":user.password }, 'secret',{expiresIn:"1h"});

    res.send({
        "message":"login successfully",
        "token":token
    })

})

app.use("/product",productController)


app.listen(8080,async()=>{
    try{
        console.log("connected to db")
    }catch(err){
        console.log(err)
    }
    console.log("server started on port 8080")
})