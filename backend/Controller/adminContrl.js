const jwt = require("jsonwebtoken");
const db = require("../model/db");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config({ path: "../config/.env" });

const User = db.AdminTableDb; 

//admin_registration

const admin_registration = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    var postData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: await bcrypt.hash(req.body.password, salt),
      phone: req.body.phone,
    };
    console.log(postData);
    const Data = await User.create(postData);

    var msg = "admin is registered";
    res.status(200).json({ alertMsg: msg });
  } catch (err) {
    res.status(400).json({success:false,
    message:`can't register,:${err.message}`})
    console.log(err);
  }
};

//admin_login

const admin_login = async (req, res) => {
  var phone = req.body.phone;
  var password = req.body.password;
  try {
    const user = await User.findOne({
      where: {
        phone: phone,
      },
    });

    if (user) {
      const password_valid = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (password_valid) {
        res.status(200).json({ message: "you are logged in" });

        // console.log(user);
      } else {
        res.status(400).json({ error: "Password Incorrect" });
      }
    } else{
      res.status(404).json({ error: "User does not exist" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  admin_registration,
  admin_login,
};
