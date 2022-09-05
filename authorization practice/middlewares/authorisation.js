const UserModel=require("../models/User.model")

const authorisation=(permittedRole)=>{
    return async(req,res,next)=>{
        let {email}=req.body;
        let user=await UserModel.findOne({email});
    console.log(user)
        let auth=false
        if(permittedRole.includes(user.role)){
         auth=true 
        }else{
            return res.send("not access to see this")
        }
        next()
    }
}

module.exports=authorisation