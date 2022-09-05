const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const connection=require("./config")
const UserModel=require("./models/User.model")
const productController=require("./controller/product.controller")
const app=express()
require('dotenv').config()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to homepage")
})

app.post("/signup",async(req,res)=>{
    let {email,password,age}=req.body;
    const already_user=await UserModel.findOne({email});
    if(already_user==true){
        return res.send("email already exist. please login")
    }
    bcrypt.hash(password, 7, function(err, hash) {
        // Store hash in your password DB.
        if(err){
            res.send("something went wrong")
        }
        const user=new UserModel({email,password:hash,age})
        user.save()
        res.send("Sign up Successfull")
    });
})

app.post("/login",async(req,res)=>{
    let {email,password}=req.body;
    const user= await UserModel.findOne({email});
    if(!user){
       return res.send("account not there.Please singup first!!")
    }
  console.log(user)
  let hash_password=user.password;
  bcrypt.compare(password, hash_password, function(err, result) {
    // result == true
    if(err){
        return res.send("Please try after some time")
    }
    if(result==true){
        const token= jwt.sign({ email:user.email,password:user.password,_id:user._id }, 'secret');
        return res.send({message:"login successfull",token:token})
    }else{
        return res.send("invalid crediantials")
    }
});
})

app.get("/",(req,res)=>{
    res.send("homepage")
})

app.use("/product",productController)




app.listen(8080,async()=>{
try{
   await connection;
console.log("connected to db")
}
catch(err){
    console.log(err)
}
console.log("Listening on port 8080")
})