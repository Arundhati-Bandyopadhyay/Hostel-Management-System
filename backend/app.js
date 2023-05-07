const express=require('express');
const dotenv = require("dotenv");
const app=express();

dotenv.config({path:"config/.env"})
const Student=require('./Models/StudentModel')
const Admin=require("./Models/adminModel")
const Movement=require("./Models/movementTime")

const StudentComplaint=require("./Models/studentscomplaint")



const sequelize=require('./util/db')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

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




//router import
const apiroute=require('./router/route');
app.use("/api",apiroute);

//serverconnection
app.listen(process.env.PORT, ()=>{
  console.log(`server is running successfully`)
});
