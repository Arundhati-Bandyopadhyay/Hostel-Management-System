const express=require("express");
const router=express.Router();
const admincntrlr=require("../Controller/adminContrl");
const studentcntrlr=require("../Controller/Studentcntrl");
const movingcntrl=require("../Controller/MovingTime")

router.route("/adminregister").post(admincntrlr.admin_registration);
router.route("/adminlogin").get(admincntrlr.admin_login);

router.route("/studentregister").post(studentcntrlr.student_registration)
router.route("/moveOuttime").post(movingcntrl.MoveOutTime)
router.route("/moveIntime").post(movingcntrl.MoveInTime)




module.exports=router;