/*const express = require("express")
const bodyParser = ("body-parser")
const mongoose = require("mongoose")
const app = express()

//importerar routes
const apiRoutes= require("./api-routes")

app.use(bodyParser.json())

//vilken databas vi vill ha
mongoose.connect("mongodb:/localhost/table", {
useNewUrlParser: true,    
})
const db = mongoose.connection;

if(!db){
console.log("Error connecting db")
}else{
console.log("Db connected successfully")


}
const PersonalScema =new mongoose.Schema({
 personal:{
     firstaName:string,
     phone:string,
     email:string,
     kontonr:string,
 }   
})
const Personal = mongoose.model("Personal, PersonalSchema");
module.exports=Personal;

const port = process.env.PORT || 3001;
app.get("/", (_req, res)=>{
   res.send(json) 
})

app.get('/', (_req, res) => res.send(''));

app.use('/api', apiRoutes);

app.listen(3001, ()=>{
    console.log("Running om port 3001")
});*/