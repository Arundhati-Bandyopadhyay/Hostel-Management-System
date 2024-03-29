const express=require("express");
const router=express.Router();
const admincontroller=require("../Controllers/adminController");
const studentcontroller=require("../Controllers/studentController")
const movementcontroller=require("../Controllers/movementController");
const roomcontrolller = require("../Controllers/roomcontroller");
const studentComplaintcontroller=require("../Controllers/studentcomplaintcontroller")
const studentapplications=require("../Controllers/studentapplications")

//adminroute
router.route("/adminregister").post(admincontroller.admin_registration);
router.route("/adminupdate/:id").patch(admincontroller.admin_update)
router.route("/adminlogin").get(admincontroller.admin_login)
router.route("/admindelete/:id").delete(admincontroller.admin_delete)
router.route("/getAllAdmins").get(admincontroller.admin_details)
//studentroute
router.route("/studentregister").post(studentcontroller.student_registration)
router.route("/studentlogin").get(studentcontroller.student_login)
router.route("/studentupdate/:id").patch(studentcontroller.student_update)
router.route("/studentdelete/:id").delete(studentcontroller.student_delete)
router.route("/getAllStudents").get(studentcontroller.student_details)
//movementroute
router.route("/moveOuttime").post(movementcontroller.MoveOutTime)
router.route("/moveIntime").post(movementcontroller.MoveInTime)
router.route("/getAllMovements").get(movementcontroller.GetAllMovement)

//roomdetailsroute
router.route("/getRoomDetails").post(roomcontrolller.room_details)
router.route("/getAllRoomDetails").get(roomcontrolller.all_room_details)

//complaint
router.route("/getcomplaints").post(studentComplaintcontroller.Student_Complaint)
router.route("/getAllcomplaints").get(studentComplaintcontroller.Student_All_Complaint)

//applications
router.route("/sendApplications").post(studentapplications.student_applications)
router.route("/getAllApplications").post(studentapplications.Student_All_Applications)
module.exports=router;