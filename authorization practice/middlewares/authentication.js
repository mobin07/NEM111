const jwt=require("jsonwebtoken")
require('dotenv').config()

const authentication=(req,res,next)=>{
    if(!req.headers.authorization){
        return res.send("Please login")
    }
    let user_token=req.headers.authorization.split(" ")[1]
    jwt.verify(user_token, 'secret', function(err, decoded) {
      if(err){
        return res.send("Please login again")
      }
console.log("decoded")
      console.log(decoded);
      req.body.email=decoded.email;
      next()
      });
}

module.exports=authentication