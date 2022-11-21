const db = require("../model/db");
const User = db.Student; 

const student_registration = async (req, res) => {
    try {
      var postData = {
        
        name: req.body.name,
        email:req.body.email,
        roomNo:req.body.roomNo,
        gender: req.body.gender,
        stream: req.body.stream,
        roll:req.body.roll,
        year:req.body.year,
        session_from: Date.now(),
        session_to:req.body.session_to,
        phoneNo:req.body.phoneNo,
        gurdianName:req.body.gurdianName,
        gurdianphone:req.body.gurdianphone,
        address:req.body.address,
        pincode:req.body.pincode

        
      };
      console.log(postData);
      const Data = await User.create(postData);
  
      var msg = "Student is registered";
      res.status(200).json({ alertMsg: msg });
    } catch (err) {
      res.status(400).json({success:false,
      message:`can't register,:${err.message}`})
      console.log(err);
    }
  };

  module.exports={student_registration};