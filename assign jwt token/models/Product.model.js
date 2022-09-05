const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    name:String,
    id:String,
    description:String
})

const ProductModel=mongoose.model("product",productSchema)

module.exports=ProductModel

