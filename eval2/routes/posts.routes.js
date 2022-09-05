const {Router}=require("express")
// const dns=require("dns")
// const dnsRoutes=express.Router()
const postsRoutes=Router()
postsRoutes.post("/",(req,res,next)=>{
    const {id,title,content,author}=req.body;
   
    if(typeof(id)=="number" && typeof(title)=="string" && typeof(content)=="string" && typeof(author)=="string"){
next()
    }else{
        res.send("Validation Failed")
    }

})
    
    module.exports=postsRoutes