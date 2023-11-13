const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken")
const dbconfig = require("./DBConfig/dbconfig");
const SignIn = require("./Routes/auth/signin");
const SignUp = require("./Routes/auth/signup");
const User = require("./Models/users");
app.use(cors());
app.use(express.json());
const PORT = parseInt(process.env.PORT);
dbconfig();
app.get("/",(req,res)=>{
    res.send("<h1>Hello from nodejs server!:)</h1>")
})
app.post("/api/auth/signin",SignIn);
app.post("/api/auth/signup",SignUp);
app.post("/api/verifytoken",(req,res)=>{
    const decoded = jwt.verify(req.body.token,"absdfcghjsgdyubdhdbjhdbjhdbdhbfjhdbdhfdhkhd")
    res.status(200).json({
       ...decoded
    })
})
app.post("/api/getuser",(req,res)=>{
    User.findOne({email:req.body.email}).then(result=>{
        res.status(200).json({
            ...result
        })
    })
})

app.listen(PORT,()=>{
    console.log(`server is runninng on ${PORT}`)
})
