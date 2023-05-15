const StudentComplaint = require("../Models/studentscomplaint");
const Student = require("../Models/StudentModel");
//create complaints
const Student_Complaint = async (req, res) => {
  try {
    const foundstudent = await Student.findOne({
      where: {
        id: req.body.id,
      },
    });

    if (foundstudent) {
      var complaints = {
        complaint: req.body.complaint,
        name: foundstudent.name,
        studentId: req.body.id,
      };
      const studentComplaint = await StudentComplaint.create(complaints);
      var msg = "your complaint is sent";
      res.status(200).json({ alertMsg: msg });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json("something is wrong");
  }
};

//getAllComplaINTS
const Student_All_Complaint =async(req,res)=>{
  try {
    const complaintdetails=await StudentComplaint.findAll()
    res.status(202).json(complaintdetails)
  } catch (error) {
    res.status(401).json("Can't find complaint Details")
  }
}
module.exports = { Student_Complaint,Student_All_Complaint };