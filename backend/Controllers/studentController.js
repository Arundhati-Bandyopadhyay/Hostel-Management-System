const bcrypt = require("bcryptjs");
const Student = require("../Models/StudentModel");

//Student Registration
const student_registration = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const foundStudentph = await Student.findOne({
      where: {
        phoneNo: req.body.phoneNo,
      },
    });
    const foundStudentmail = await Student.findOne({
      where: {
        email: req.body.email,
      },
    });
    const foundStudentroll = await Student.findOne({
      where: {
        roll: req.body.roll,
      },
    });
    if (foundStudentph) {
      return res.status(401).json({ message: "Number Already exist" });
    } else if (foundStudentmail) {
      return res.status(401).json({ message: "This email is Already exist" });
    } else if (foundStudentroll) {
      return res.status(401).json({ message: "This Roll is Already exist" });
    } else {
      var postData = {
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, salt),
        gender: req.body.gender,
        stream: req.body.stream,
        roll: req.body.roll,
        year: req.body.year,
        session_from: Date.now(),
        session_to: req.body.session_to,
        phoneNo: req.body.phoneNo,
        gurdianName: req.body.gurdianName,
        gurdianphone: req.body.gurdianphone,
        address: req.body.address,
        pincode: req.body.pincode,
        roomNo: req.body.roomNo,
      };
      console.log(postData);
      const Data = await Student.create(postData);

      var msg = "Student is registered";
      res.status(200).json({ alertMsg: msg });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: `can't register,:${err.message}`,
    });
    console.log(err);
  }
};

//studentlogin

const student_login = async (req, res) => {
  var password = req.body.password;
  try {
    const studentlogged = await Student.findOne({
      where: {
        id: req.body.id,
      },
    });

    if (studentlogged) {
      const password_valid = await bcrypt.compare(
        password,
        studentlogged.password
      );
      if (password_valid) {
        res.status(200).json({ message: "you are logged in", studentlogged });
      } else {
        res.status(400).json({ error: "Invalid login details" });
      }
    } else {
      res
        .status(404)
        .json({ error: "User does not exist,please register your account!" });
    }
  } catch (err) {
    console.log(err);
  }
};

//studentupdate
const student_update = async (req, res) => {
  try {
    const foundStudent = await Student.findOne({ where: { id: req.params.id } });
    if (foundStudent === null) {
      return res.status(401).json({ message: "Student not found" });
    } else {
      const data = await Student.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(201).json({
        message: "Student details updated",
        data: data,
      });
    }
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: `can't register,:${err.message}` });
    console.log(err);
  }
};

//GetStudentDetails
const student_details=async(req,res)=>{
  try {
    const StudentDetails=await Student.findAll()
    res.status(202).json(StudentDetails)
  } catch (error) {
     res.status(401).json("Can't find Student Details")
  }
}

//studentdelete
const student_delete=async(req,res)=>{
  const data = await Student.destroy({
      where:{
          id:req.params.id
      }
  });
  res.status(200).json({
      "message": "Student Deleted",
      data:data});
}






module.exports = {
  student_registration,
  student_login,
  student_update,
  student_delete,
  student_details
};
