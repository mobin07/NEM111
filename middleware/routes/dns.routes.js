
// const express=require("express")
const {Router}=require("express")
const dns=require("dns")
// const dnsRoutes=express.Router()
const dnsRoutes=Router()

dnsRoutes.post("/getmeip",(req,res)=>{
const {website_name}=req.body;
dns.lookup(website_name,(err,address)=>{
    if(err){
        res.send("something went wrong") 
    }

})
})

module.exports=dnsRoutes