const express =require('express')
const mongoose=require('mongoose')
const cors =require("cors")
require("dotenv").config();
// const signupRoute=require('./routes/user')

const UserModel = require('./models/User')


const app=express()
app.use(express.json())
app.use(
  cors({
    origin: "https://mernstack-login-page-frontend.vercel.app", // Frontend URL
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.options("*", cors());


// app.use('/signup',signupRoute)

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));
  
 app.get('/',(req,res)=>{
    res.json("hello")
 } )

 app.post('/signup', (req, res) => {
    console.log(req.body);
    UserModel.create(req.body)
        .then(user =>{ 
           
            res.json(user)})
        .catch(err => res.status(500).json(err));
});

app.post('/login',(req,res)=>{
    const {email,password}=req.body
    UserModel.findOne({email})
    .then(user=>{
        console.log(user);
        if(user.password==password){
            res.json("succusful")
        }else{
            res.json("login feild")
        }
    })
    .catch(err=>res.json(err))
})

app.listen(3001 , ()=>{
    console.log("Runnig");
})
