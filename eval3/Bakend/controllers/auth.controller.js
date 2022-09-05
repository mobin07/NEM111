const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const newToken = (user) => {
    
    return jwt.sign({user}, process.env.key)
}

const register = async (req,res) => {
    try{

        let user = await User.findOne({email : req.body.email})

        if(user){
            return res.status(400).send({message : "Email already exist"})
        }

        user = await User.create(req.body)

        const token = newToken(user)
        return res.status(200).send({user , token})
    }
    catch(err){
        res.status(400).send({message : err.message})
    }

}

const login = async (req,res) => {
    try{

        const user = await User.findOne({ email : req.body.email})

        if(!user){
            return res.status(400).send("Wrong Email or Password")
        }

        const pass = await User.findOne({ password : req.body.password})

        if(!pass){
            return res.status(400).send("Wrong Email or Password")
        }

        const token = newToken(user)
        return res.status(200).send({user , token})
    }
    catch(err){
        res.status(400).send({message : err.message})
    }

}

module.exports = {register , login}


