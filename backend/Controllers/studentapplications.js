const { DATE } = require("sequelize");
const Student = require("../Models/StudentModel");
const studentapplications = require("../Models/studentapplications");

const student_applications = async (req, res) => {
      try {
       
        const foundStudent= await Student.findOne({
          where: {
            id: req.body.id,
          },
        });
        
        if (foundStudent){
          var applicants = {
            name: foundStudent.name,
            studentId: req.body.id,
          };
          await studentapplications.create(applicants)
          if (req.files || req.files.applications) {
            // Array of allowed files
            const array_of_allowed_files = ["jpeg", "jpg"];
            const file_extension = req.files.applications.name.split(".")[1];
            if (!array_of_allowed_files.includes(file_extension)) {
              return res.status(400).json({
                success: false,
                message: "Please upload jpeg, jpg only",
              });
            }
          }
          console.log(foundStudent.id);
          const filename=Date.now();
          
         

          req.files.applications.mv(`applications/image_${foundStudent.id}_${filename}.jpg`);
          let imagepath = `${req.protocol}://${req.get("host")}/applications/${foundStudent.id}.jpg`;
          await studentapplications.update({applications:imagepath}, {
            where:{
              studentId :req.body.id
            }
          });
    
          res.status(201).json({
            success: true,
            message:"applications sent"
          })
         
        }
      } 
    
 catch (error) {
    res.status(400).json({
      success: false,
      message: `can't sent applications,:${error.message}`,
    });
  }
};

module.exports = { student_applications };
