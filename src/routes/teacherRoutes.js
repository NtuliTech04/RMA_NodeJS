const express = require('express');
const teacherRouter = express.Router();
const teachersController = require('../app/controller/teachersController');

teacherRouter.get('/authentication', teachersController.teacherCredentials_Get);
teacherRouter.post('/authentication', teachersController.teacherCredentials_Post);
teacherRouter.get('/list-results', teachersController.listStudentResults_Get);
teacherRouter.get('/create-results', teachersController.addStudentResults_Get);
teacherRouter.post('/create-results', teachersController.addStudentResults_Post);
teacherRouter.get('/update-results/:id', teachersController.updateStudentResults_Get);
teacherRouter.post('/update-results/:id', teachersController.updateStudentResults_Post);
teacherRouter.get('/delete-results/:id', teachersController.deleteStudentResults_Get);
teacherRouter.get('/options', teachersController.teacherOptions_Get);

module.exports = teacherRouter;