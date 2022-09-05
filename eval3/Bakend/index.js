const express = require('express')
const connect = require('./configs/db')

const { register , login } = require('./controllers/auth.controller')

const NotesController = require("./controllers/Notes.controller")

const app = express()

app.use(express.json())



app.post("/signup" , register)

app.post("/login",login)

app.use("/notes", NotesController)

const port =process.env.PORT

app.listen(port , async () => {
    try{
        await connect
        console.log(`Connection to db success`) 
    }
    catch(err){
        console.log(err.message)
    }

    console.log(`Listening on the port ${port}`)
})