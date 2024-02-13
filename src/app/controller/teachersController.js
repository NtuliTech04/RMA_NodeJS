//Imports student model
const Student = require('../models/student.model');

//#region Teacher Authentication

    //Gets teacher login credentials from html view/form
    const teacherCredentials_Get = (req, res) => {
        res.render('teacher/authentication/login');
    };
    
    //Validates teacher's login credentials
    const teacherCredentials_Post = (req, res) => {
        if(req.body.password == process.env.Credentials){
            res.redirect('/teacher/options');
        }
        else{
            res.render('teacher/authentication/login', {   
                error : 'The provided password is incorrect.'
            })
        }
    };

//#endregion


//#region List All Student Results

    const listStudentResults_Get = async (req, res) => {
        const listResults = await Student.find();
        res.render('teacher/privileges/list-results', {results: listResults})
    };

//#endregion


//#region Create Student Results

    //Gets form data from html view/form
    const addStudentResults_Get = (req, res) => {
        res.render('teacher/privileges/create-results');
    };
    //Posts & saves this data as a record in the database 
    const addStudentResults_Post = async (req, res) => {
        const studentResults = new Student({
            name : req.body.name,  
            roll : req.body.roll,             
            dob : req.body.dob,
            score : req.body.score        
        });
        try {
            const newResults = await studentResults.save();
            res.redirect('/teacher/create-results');
        } 
        catch {
            res.send('error');
        }
    };
    
//#endregion


//#region  Update Student Results

    const updateStudentResults_Get = async (req, res) => {
        const studentToUpdate = await Student.findById(req.params.id);
        res.render('teacher/privileges/update-results', {student : studentToUpdate});
    };
    const updateStudentResults_Post =async (req, res) => {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/teacher/list-results');
    };

//#endregion


//#region  Delete Student Results

    const deleteStudentResults_Get = async (req, res) => {
        await Student.findByIdAndDelete(req.params.id);
        res.redirect('/teacher/list-results');
    };

//#endregion


//#region Teacher Options

    const teacherOptions_Get = (req,res) => {
        res.render('teacher/options');
    };

//#endregion


//Exports teachers controller action methods
module.exports = {
    teacherCredentials_Get,
    teacherCredentials_Post,
    listStudentResults_Get,
    addStudentResults_Get,
    addStudentResults_Post,
    updateStudentResults_Get,
    updateStudentResults_Post,
    deleteStudentResults_Get,
    teacherOptions_Get
}