const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb://localhost:27017/movies");

const movieSchema=mongoose.Schema({
    id:{type:Number,require},
    title:{type:String,require},
    rating:{type:Number,require},
    poster:{type:String,require}
})

const movieModel=mongoose.model("movie",movieSchema);

module.exports={connection,movieModel};