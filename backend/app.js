const express=require('express');
const dotenv = require("dotenv");
const app=express();
const upload = require("express-fileupload")
const path = require("path")
dotenv.config({path:"config/.env"})
const Student=require('./Models/StudentModel')
const Admin=require("./Models/adminModel")
const Movement=require("./Models/movementTime")


const StudentComplaint=require("./Models/studentscomplaint")
const studentapplications=require("./Models/studentapplications")



const sequelize=require('./util/db')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(upload());
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));
app.use("/applications", express.static(path.join(__dirname + "/applications")));

try {
    sequelize.sync({ force:false})
    console.log("synchronized") 
  } 
catch (error) {
    console.error(error)
  }

Student.hasOne(Movement);
Movement.belongsTo(Student);

Student.hasOne(StudentComplaint);
StudentComplaint.belongsTo(Student);

Student.hasOne(studentapplications);
studentapplications.belongsTo(Student);



//router import
const apiroute=require('./router/route');
app.use("/api",apiroute);

//serverconnection
app.listen(process.env.PORT, ()=>{
  console.log(`server is running successfully`)
});
