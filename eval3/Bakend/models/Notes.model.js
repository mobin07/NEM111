const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({

    title : {type : String , required : true},
    note : {type : String , required : true},
    label:{type:String, required:true},
    user_id : {type : mongoose.Schema.Types.ObjectId , ref : "user" , required : true}

})

const Note = mongoose.model("note",notesSchema)

module.exports = Note