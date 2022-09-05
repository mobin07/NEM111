const mongoose=require("mongoose")

const notesSchema=new mongoose.Schema({
    title:String,
    label:String,
    tag:String,
    userId:{type:String,default:""}
})

const NotesModel=mongoose.model("notes",notesSchema)

module.exports=NotesModel