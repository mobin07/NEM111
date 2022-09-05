const express=require("express")
const productController=express.Router();

const authentication=require("../middlewares/authentication");
const authorisation=require("../middlewares/authorisation");

productController.get("/",authentication,authorisation(["admin"]),(req,res)=>{
    res.send("all the product list")
})

productController.get("/seller",authentication,authorisation(["admin","seller"]),(req,res)=>{
    res.send("seller are authorised")
})

module.exports=productController