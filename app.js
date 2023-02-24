const express = require("express");
const app = express();
const port = 3000;
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const User = require("./models/user");
const Robot = require("./models/robot");


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/",(req,res) => {
  res.render("index");
});

app.get("/Essam", (req, res) => {
  res.send("wellcome ♥ ");
});

app.get("/createRobot", (req, res) => {
  res.render("createRobot");
});

app.get("/createProcess", (req, res) => {
  res.render("createProcess");
});

app.get("/createMachine", (req, res) => {
  res.render("createMachine");
});

app.get("/createUser", (req, res) => {
  res.render("createUser");
});

//User
app.post("/createUser", (req, res) => {
  const user = new User(0, req.body.name, req.body.email);
  user
  .save()
  .then((result)=>{
  res.render("createUser");
 })
  .catch((err)=>{
    console.log(err)});
  });

//Robot
app.post("/createRobot", (req, res) => {
  if(req.body.stand == "on"){
    req.body.stand = "Standard";
  }else{
    req.body.stand = "Not-Standard";
  }
  const robot = new Robot(0, req.body.naame, req.body.stand, req.body.user_id);
  robot
  .save()
  .then((result)=>{
  res.render("createRobot");
 })
  .catch((err)=>{
    console.log(err)});
});













// ___________________________________________________________________________________
// const mongoose = require('mongoose'); 
// for mongo db (connection,show data in website, and delete )
// mongoose.connect("mongodb+srv://EssamSaid:241100@cluster0.xx6csun.mongodb.net/?retryWrites=true&w=majority")
// .then((result) => {  
//   console.log('Connected to MongoDB.');
// })
// .catch((err) => {  
//   console.log(err);
// });
// dashboard in mongoDB
// to show all user data in DashBoard page
// then and catch ---> in promise function
// app.get("/Dashboard",(req,res) => {
//   User.find()
//   .then((result) => {
//     res.render("DashBoard", {arrUser: result});
//   })
//   .catch((err) => {
//     console.log(err);  
//   });
// });

// for delete data from data base (users)
// app.delete("/DashBoard/:id",(req,res) => {
//   User.findByIdAndDelete(req.params.id)
//   .then((params) => { res.json({mylink: "http://localhost:3000"})})
//   .catch((err) => 
//   {
//     console.log(err);
//   })
  
// });

