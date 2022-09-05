const {Router}=require("express")
const productRoutes=Router()

productRoutes.get("/",(req,res)=>{
    res.send("Home page")
})


module.exports=productRoutes
