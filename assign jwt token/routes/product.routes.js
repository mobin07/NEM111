const express=require("express")
const ProductModel=require("../models/Product.model")
const authentication=require("../middlewares/authentication")
const productController=express.Router()

productController.post("/post",async(req,res)=>{
    const {name,description,userId}=req.body;
    const new_product=new ProductModel({
        name,
        description,
        userId
    })
    await new_product.save()
    res.send({"message":"product got added",new_product})
})

productController.get("/",async(req,res)=>{
    const product=await ProductModel.find()
    res.send(product)
})

productController.patch(":productId/update",async(req,res)=>{
const productId=req.params
const user_token=req.headers.authorization.split(' ')[1]
jwt.verify(user_token, 'secret', function(err, decoded) {
    if(err){
        return res.send("please login again")
    }
console.log(decoded)
let {email,password}=decoded;

  });
})

module.exports=productController

