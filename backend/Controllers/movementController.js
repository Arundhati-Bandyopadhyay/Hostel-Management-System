const Movement = require("../Models/movementTime");
const Student=require("../Models/StudentModel")
//MoveOut
const MoveOutTime = async (req, res) => {
    try {
      const StudentGone=await Movement.findOne({
        where: {
          studentId:req.body.id,
        }
        })
        const student = await Student.findOne({
          where: {
            id: req.body.id,
          },
        });

        if(StudentGone && StudentGone.Moveing_Time){
          res.status(200).json("Student is already in outside");
        }
        else{
        const Moveouting_Time={
        
        name:student.name,
        MoveOut_Time: Date.now(),
        movement_location:req.body.movement_location,
        studentId:req.body.id,
        }
    
        console.log(req.body);
        const time=await Movement.create(Moveouting_Time,{where:{studentId:req.body.id}});
        res.status(200).json("Student has gone to outside");
        }
      }
     catch (err) {
      console.log(err)
      res.status(400).json('something is wrong');
    }
  };
//MoveIN
  const MoveInTime = async (req, res) => {
    try {
      const StudentGone=await Movement.findOne({
        where: {
          studentId:req.body.id,
        }
        })
      if(StudentGone && StudentGone.MoveIn_Time ){
        res.status(200).json("Student is already inside");
      }
      else if(!StudentGone){
        res.status(400).json('This is student has not yet gone outside,please check entry details!');
      }else{
        const MoveIn_Time={
        MoveIn_Time: Date.now()       
        }
        const time=await Movement.update(MoveIn_Time,{where:{studentId:req.body.id}});
        res.status(201).json("Student has comeback to hostel");
        console.log(time);
      }}
     catch (err) {
     console.log(err);
  
    }
  };

  //GetAll Movement Details
  const GetAllMovement=async(req,res)=>{
    try {
      const StudentGone=await Movement.findAll()
      res.status(202).json(StudentGone)
    } catch (error) {
       res.status(401).json("Can't find Movement Details")
    }
  }
  
  module.exports = {
    MoveOutTime,MoveInTime,GetAllMovement
  };
