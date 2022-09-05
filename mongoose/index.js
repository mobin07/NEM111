// const mongoose=require("mongoose")
// // const connection =mongoose.connect("mongodb://127.0.0.1:27017/web18")
// const connection =mongoose.connect("mongodb+srv:mobinmemon:abc321@cluster0.4yiuhie.mongodb.net/?retryWrites=true&w=majority")

// // 1. to connect to db
// const connectDB=async()=>{
//     // console.log("hey")
//     const conn=await connection
// console.log("connection successful to database")
// const studentDocument=new StudentModel({
//     name:"Arjun",
//     id:"xyz234",
//     age:24,
//     hobbies:["cricket","football"]
// })
// try{
//     await studentDocument.save()
//     console.log("student data save");
// }
// catch(err){
//     console.log(err)
// }

// conn.disconnect()
// }
// connectDB()

// // 2. model/schema
// schema -class-cookie cutter
// model-object-cookie
// // const studentSchema=new mongoose.Schema({
// //     name:String,
// //     student_id:Number,
// //     age:Number
// // })
// const studentSchema=new mongoose.Schema({
//     name:{type:String,required:true},
//     id:{type:String,required:true},
//     age:{type:Number,required:true},
//     hobbies:{type:Array,required:true}
// })

// const StudentModel=mongoose.model("student",studentSchema)
// // convention -good practices

// module.exports={connection,StudentModel}

// faisal
const mongoose = require("mongoose");
const connection= mongoose.connect("mongodb+srv:mobinmemon:abc321@cluster0.4yiuhie.mongodb.net/?retryWrites=true&w=majority");


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
