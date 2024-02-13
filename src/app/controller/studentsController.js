//Imports student model
const Student = require('../models/student.model');


//#region Student Validator

    const validateStudent_Get = (req, res) => {
        res.render('student/authentication/validation');
    };

    const validateStudent_Post = async (req, res) => {
        let getStudent = await Student.findOne({roll: req.body.roll});   

        if(getStudent){
            res.render("student/report/myResults", { student : getStudent});
        }      
        else{
            res.render('student/authentication/validation', {
                error : 'The provided details are incorrect.'
            });
        }
    };
   
//#endregion


//Exports students controller actions methods
module.exports = {
    validateStudent_Get,
    validateStudent_Post
}
