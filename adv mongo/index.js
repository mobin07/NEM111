const mongoose = require("mongoose");
const connection= mongoose.connect("mongodb+srv://mobinmemon:abc321@cluster0.4yiuhie.mongodb.net/?retryWrites=true&w=majority");


// const connection= mongoose.connect("mongodb://localhost:27017/web18");

// mongodb+srv://faisalk2:<password>@cluster0.ptvxmhk.mongodb.net/web17?retryWrites=true&w=majority
// const connectDB=async ()=>{
//     const conn= await connection;
//     console.log("connection successfull to database");

//     const studentDocument=new studentModel({
//         name:"sana",
//         id:3,
//         age:25
//     })

//    try{
//     await studentDocument.save();
//     console.log("data save")
//    }catch(err){
// console.log(err);
//    }


//     conn.disconnect();
// }

// connectDB()

const studentSchema=mongoose.Schema({
    name:{type:String,require:true},
    id: {type:Number,require:true},
    age:{type:Number,require:true},
    hobbies:{type:[String,Number]}

})



const studentModel=mongoose.model("student",studentSchema)



module.exports={connection,studentModel};