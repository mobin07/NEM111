const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:String,
    password:String,
    age:Number,
    role:{type:String,default:"customer"}
})

const UserModel=mongoose.model("users",userSchema)

module.exports=UserModel