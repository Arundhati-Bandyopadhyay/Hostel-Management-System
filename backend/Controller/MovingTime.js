const db = require("../model/db");
const User = db.MovingTime;



const MoveOutTime = async (req, res) => {
    try {
      
        const Moveing_Time={
        
        MoveOut_Time: Date.now(),
        //movement_location:req.body.movement_location,
         StudentId:req.body.id,
         
      
        }
        const time=await User.create(Moveing_Time);
        
        res.status(200).json(Moveing_Time);
       
      }
     catch (err) {
      console.log(err);
    }
  };

  
  const MoveInTime = async (req, res) => {
    try {
        const MoveIn_Time={
        
        MoveIn_Time: Date.now(),
        
        
        }
        const time=await User.update(MoveIn_Time,{where:{StudentId:req.body.id}});
        
        res.status(200).json(time);
        console.log(time);
      }
     catch (err) {
      console.log(err);
    }
  };
  
  module.exports = {
    MoveOutTime,MoveInTime
  };