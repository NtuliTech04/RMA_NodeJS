const express = require('express');
const studentRouter = express.Router();
const studentsController = require('../app/controller/studentsController');

studentRouter.get('/validation', studentsController.validateStudent_Get);
studentRouter.post('/validation', studentsController.validateStudent_Post);

module.exports = studentRouter;