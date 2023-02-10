const db = require("../util/db");
const bcrypt = require("bcryptjs");

const Admin = require("../Models/adminModel");

//adminregistration

const admin_registration = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);

    const adminExists = await Admin.findOne({
      where: {phoneNo: req.body.phoneNo},
    });
    if (adminExists) {
      res.json("Admin already registered");
    } else {
      postData = {
        name: req.body.name,
        password: await bcrypt.hash(req.body.password, salt),
        phoneNo: req.body.phoneNo,
      };
      //console.log(postData);
      await Admin.create(postData);

      var msg = "admin is registered";
      res.status(200).json({ alertMsg: msg });
    }
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: `can't register,:${err.message}` });
    console.log(err);
  }
};

//AdminLogin
const admin_login = async (req, res) => {
  var phoneNo = req.body.phoneNo;
  var password = req.body.password;
  try {
    const user = await Admin.findOne({
      where: {
        phoneNo: phoneNo,
      },
    });

    if (user) {
      const password_valid = await bcrypt.compare(
        password,
        user.password
      );
      if (password_valid) {
        res.status(200).json({ message: "you are logged in" });
      } else {
        res.status(400).json({ error: "Invalid login details" });
      }
    } else {
      res.status(404).json({ error: "User does not exist" });
    }
  } catch (err) {
    console.log(err);
  }
};

//update
const admin_update = async (req, res) => {
  try {
    const foundAdmin = await Admin.findOne({ where: { id: req.params.id } });
    if (foundAdmin === null) {
      return res.status(401).json({ message: "Admin not found" });
    } else {
      const data = await Admin.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(201).json({
        message: "Admin updated",
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
const admin_details=async(req,res)=>{
  try {
    const AdminDetails=await Admin.findAll()
    res.status(202).json(AdminDetails)
  } catch (error) {
     res.status(401).json("Can't find Admin Details")
  }
}

//admindelete
const admin_delete=async(req,res)=>{
  const data = await Admin.destroy({
      where:{
          id:req.params.id
      }
  });
  res.status(200).json({
      "message": "Admin is Deleted",
      data:data});
}
module.exports = {
  admin_registration,
  admin_login,
  admin_update,
  admin_delete,
  admin_details
};
