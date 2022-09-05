const jwt=require("jsonwebtoken");
const UserModel = require("../models/User.model");

const authentication=(req,res,next)=>{
    if(!req.headers.authorization){
        res.send("please login again")
    }
    const user_token=req.headers.authorization.split()[1];
    jwt.verify(user_token, 'secret', async(err, decoded)=> {
         if(err){
            console.log("please try again later")
         }
         console.log(decoded)
         req.body.email=decoded.email
         let email=decoded.email
         let user=await UserModel.findOne({email})
         req.body.userId=user.userId
         next()
      });

}