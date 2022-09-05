const express = require('express')
const authenticate = require('../middleware/authenticate')
const router = express.Router()
const authorize = require('../middleware/authorise')

const Note = require('../models/Notes.model')

router.post("", authenticate ,async (req,res) => {
    try{
        const note = await Note.create(req.body)
        return res.status(200).send(note)
    }
    catch(err){
        return res.status(400).send({ message : err.message})
    }
})

router.get("" , async (req,res) => {
    const note = await Note.find()
    return res.send(note)
})

router.patch("/:id" , authenticate , async(req,res) => {
    try{
        const note = await Note.findByIdAndUpdate(req.params.id , req.body , {new : true})
        return res.status(200).send(note)
    }
    catch(err){
        return res.status(400).send({ message : err.message})
    }
})


router.delete("/:id" , authenticate , async(req,res) => {
    try{
        const note = await Note.findByIdAndDelete(req.params.id , req.body , {new : true})
        return res.status(200).send(note)
    }
    catch(err){
        return res.status(400).send({ message : err.message})
    }
})

module.exports = router