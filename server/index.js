const express = require('express');
const mongoose = require('mongoose');
const app = express();
const CurdModel = require("./models/Curd")

app.use(express.json())

mongoose.connect("mongodb+srv://root:123@cluster0.tpkkjfl.mongodb.net/crud?retryWrites=true&w=majority",{
    useNewUrlParser: true, 
})

app.get('/', async (req,res)=>{
   const curd = new CurdModel({ col1:"varsha" , col2:26});
//    res.send("hello server");  //middelware
  try{
     await curd.save();
     res.send("inserted");
  }catch(err){
          console.log(err)
  }
});



app.listen(3001,()=>{
    console.log("running...");
});