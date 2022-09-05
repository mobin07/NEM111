const express=require("express")
const bcrypt = require('bcrypt');
const {connection}=require("./config")
const UserModel=require("./models/User.model")
const app=express();
app.use(express.json())
var jwt = require('jsonwebtoken');
require('dotenv').config()
// app.get("/",(req,res)=>{
//     return res.send("Home page")
// })


// app.post("/signup",async(req,res)=>{
// const {email,password,age}=req.body;
// const user=new UserModel({
//     email,
//     password,
//     age
// })
// await user.save();
// return res.send("Sign up successfull")
// })

app.get("/",(req,res)=>{
    // console.log(process.env.password)
    return res.send(`<a href="https://github.com/login/oauth.authorize?client_id=f4d9720c62f471370764">login via github</a>`)
})
app.post("/signup",async(req,res)=>{
   
    let {email,password,age}=req.body;
   await bcrypt.hash(password,8,function(err,hash){
    if(err){
        return res.send("Sign up failed,please try again later")
    }
    const user=new UserModel({email,password:hash,age})
    user.save()
    return  res.send("Sign up successful")
   })
    })

// app.post("/login",async(req,res)=>{
// const {email,password}=req.body;

// const user=await UserModel.find({email,password})

// console.log(user);
// var token = jwt.sign({ email:user.email,age:user.age,_id:user._id }, 'secret');
// if(user.length===0){
//     return res.send("invalid credentials")
// }
// return res.send({message:"login successfull",token:token})
// })

app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const user=await UserModel.findOne({email})
    const hashed_password=user.password
    await bcrypt.compare(password,hashed_password,function(err,result){
        if(err){
            return res.send(",please try again later")
        }
       if(result){
        const token=jwt.sign({email:user.email,age:user.age,_id:user.id},'secret')
       if(!user){
        return  res.send("invalid crediantials")
       }
       return res.send({message:"login successful",token:token})
    }else{
        return  res.send("invalid crediantials")
    }
       })
    
    })
    
app.get("/dashboard",(req,res)=>{
    // const {code}=req.query
    console.log(req.query.code)
    return res.send("dashboard is accessed only after login")
})
app.get("/profile/:id",async(req,res)=>{
  const id=req.params.id;
//   const user_token=req.query.token
const user_token=req.headers.authorization.split(' ')[1]
//   if(Number(token)!=12345){
//     return res.send("Please login again")
//   }
jwt.verify(user_token, 'secret', function(err, decoded) {
    // console.log(decoded.foo) // bar
    if(err){
        return res.send("please login again")
    }
    console.log(decoded)
  });
    try{
    const user =await UserModel.find({_id:id})
   return res.send(user)
}catch{
    return res.send("not found")
}
})

app.get("/auth/github",(req,res)=>{
    return res.send({"message":"Logged in successfully","code":req.query.code})
})
app.listen(8000,async()=>{
    try{
        await connection
        console.log("connected to db")
    }
    catch(err){
console.log(err)
    }
    console.log("listening to port 8000")
})




// Client ID
// f4d9720c62f471370764