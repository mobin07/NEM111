const express =require("express")
const app=express()
const dnsRoutes=require("./routes/dns.routes")
const fs=require("fs")
const dns=require("dns")
app.use(express.json())
app.use(express.text())
// if the req. is of text 



// app.use((req,res,next)=>{
//     console.log("hi middlware")
//     next();
//     console.log("bye")
// })
// app.use((req,res,next)=>{
//     console.log("y")
//     next();
//     console.log("q")
// })
// const logger=(req,res,next)=>{
//     console.log(req.url)

//     // const st=new Date.toLocalTimeString();
//     const st=new Date.getTime()
//     console.log("start time-", st)
//     next()
//     // const et=new Date.toLocalTimeString();
//     const et=new Date.getTime()
//     console.log("end time[-",et)

//     // time taken =diff of st-et
//     console.log(et-st +"millisecond")
// }
// time taken between req and res
// starttime and endtime
// app.use(logger)  

// middleware to check user is admin or not 
const checkAdmin=(req,res,next)=>{
    const {user}=req.query;
    if(user==="admin"){
        next()
    }else{
        res.send("u are unauthorized")

    }
}

app.use(checkAdmin)
// app.use(logger,checkAdmin)


//as it is a callback function 
app.use("/dns",dnsRoutes)
// app.use("/product",productRoutes)
app.get("/",(req,res)=>{
    console.log("res")
    res.send("hello")
    console.log("no")
})
app.get("/dashboard",(req,res)=>{
    console.log("dashboard")
    res.send("hello dashboard")
    console.log("mp")
})

app.get("/about",(req,res)=>{
    
})


app.listen(8000,()=>{
    console.log("listening at 8000")
})



// middleware
// custom or own middleware:eg logger,checkAdmin
// Router Middleware-clean code , better segregation of code
// express middleware or built-in middleware-app.use(express.json()),express.Router
// community middlewares-need to be installed eg:cors



// const express=require("express")
// const app=express()

// const morgan=require("morgan")
// app.use(express.json())

// app.use(morgan(`:url :method`))
// app.get("/",(req,res)=>{
//     console.log("hi")
//     res.send("hello")
// })

// app.listen(9000,()=>{
//     console.log("listening at 8000")
// })

